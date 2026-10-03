import { createClient, SupabaseClient } from '@supabase/supabase-js';

// IMPORTANT: NEXT_PUBLIC_* vars MUST be read via static member access
// (process.env.NEXT_PUBLIC_SUPABASE_URL), NOT dynamic bracket access
// (process.env[key]). Next.js/webpack only inlines NEXT_PUBLIC_* into the
// client bundle when it can statically analyse the member access at build time.
function supabaseUrl(): string {
  return requireEnv(process.env.NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL');
}
function supabaseAnonKey(): string {
  return requireEnv(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 'NEXT_PUBLIC_SUPABASE_ANON_KEY');
}
function supabaseServiceKey(): string {
  return requireEnv(process.env.SUPABASE_SERVICE_ROLE_KEY, 'SUPABASE_SERVICE_ROLE_KEY');
}
function requireEnv(value: string | undefined, key: string): string {
  if (!value) {
    throw new Error(`Missing env var: ${key}. Add it to your deployment environment (Vercel/Cloudflare) or .env.local`);
  }
  return value;
}

let supabaseClient: SupabaseClient<any> | null = null;

/**
 * The browser/anon client. Created lazily on first property access so merely
 * importing this module during `next build` (when env vars may be absent on
 * the build machine / CI) doesn't crash with "supabaseUrl is required".
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSupabase(): SupabaseClient<any> {
  if (!supabaseClient) {
    supabaseClient = createClient<any>(
      requireEnv(supabaseUrl(), 'NEXT_PUBLIC_SUPABASE_URL'),
      requireEnv(supabaseAnonKey(), 'NEXT_PUBLIC_SUPABASE_ANON_KEY'),
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
        },
      }
    );
  }
  return supabaseClient;
}

/**
 * A no-op stub returned when Supabase env vars are missing (e.g. the site is
 * viewed before they are configured). Every call resolves to an empty result
 * so auth/data features degrade silently instead of white-screening the app.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createStub(): any {
  const empty = () => Promise.resolve({ data: null, error: new Error('Supabase not configured') });
  const noSession = () => Promise.resolve({ data: { session: null }, error: new Error('Supabase not configured') });
  const chainable = new Proxy(
    { then: undefined },
    {
      get: () => chainable,
      apply: () => Promise.resolve(chainable),
    }
  );
  const execute = () => Promise.resolve({ data: null, error: new Error('Supabase not configured') });
  return new Proxy(
    {
      auth: {
        getSession: noSession,
        getUser: noSession,
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } }, error: null }),
        signInWithPassword: empty,
        signUp: empty,
        signOut: empty,
        updateUser: empty,
      },
      from: () => ({
        select: () => execute(),
        insert: () => execute(),
        update: () => execute(),
        delete: () => execute(),
        eq: () => ({ maybeSingle: execute }),
        order: () => ({ limit: () => execute }),
        single: execute,
        maybeSingle: execute,
      }),
      rpc: () => execute(),
      channel: () => chainable,
    },
    {
      get(t: any, prop: string | symbol) {
        if (prop in t) return t[prop];
        return execute;
      },
    }
  );
}

// Lazy proxy: real client is created only when a property is accessed. If the
// env vars are missing (Supabase not configured), return a safe stub instead of
// throwing, so the UI renders instead of crashing.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const supabase: SupabaseClient<any> = new Proxy(
  {} as SupabaseClient<any>,
  {
    get(_target, prop: string | symbol) {
      try {
        return (getSupabase() as any)[prop];
      } catch (err) {
        if (err instanceof Error && /Missing env var/.test(err.message) && typeof window !== 'undefined') {
          return (createStub() as any)[prop];
        }
        throw err;
      }
    },
    set(_target, prop: string | symbol, value: unknown) {
      (getSupabase() as any)[prop] = value;
      return true;
    },
  }
);

// Server-side admin client (never expose to browser)
export const createAdminClient = () => {
  if (typeof window !== 'undefined') {
    throw new Error('Admin client must only be used server-side');
  }
  return createClient<any>(
    requireEnv(supabaseUrl(), 'NEXT_PUBLIC_SUPABASE_URL'),
    requireEnv(supabaseServiceKey(), 'SUPABASE_SERVICE_ROLE_KEY'),
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
};
