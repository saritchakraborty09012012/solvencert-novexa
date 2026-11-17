export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id:               string;
          email:            string;
          full_name:        string;
          phone:            string | null;
          dob:              string | null;
          bio:              string | null;
          avatar_url:       string | null;
          initials:         string;
          plan:             'free' | 'premium' | 'trial' | 'freemium';
          trial_ends_at:    string | null;
          premium_ends_at:  string | null;
          referral_code:    string;
          referred_by:      string | null;
          total_referrals:  number;
          email_verified:   boolean;
          history_retention_days: number;
          history_keep_forever:   boolean;
          created_at:       string;
          updated_at:       string;
        };
        Insert: Omit<Database['public']['Tables']['profiles']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['profiles']['Insert']>;
      };
      invitee_profiles: {
        Row: {
          id:          string;
          session_id:  string;
          host_id:     string;
          email:       string | null;
          name:        string;
          dob:         string | null;
          phone:       string | null;
          joined_at:   string;
          left_at:     string | null;
          created_at:  string;
        };
        Insert: Omit<Database['public']['Tables']['invitee_profiles']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['invitee_profiles']['Insert']>;
      };
      study_sessions: {
        Row: {
          id:          string;
          host_id:     string;
          title:       string;
          invite_link: string;
          is_active:   boolean;
          max_members: number;
          expires_at:  string;
          created_at:  string;
        };
        Insert: Omit<Database['public']['Tables']['study_sessions']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['study_sessions']['Insert']>;
      };
      payments: {
        Row: {
          id:           string;
          user_id:      string;
          amount:       number;
          utr_number:   string;
          screenshot_url: string | null;
          status:       'pending' | 'verified' | 'rejected';
          plan_months:  number;
          created_at:   string;
          verified_at:  string | null;
        };
        Insert: Omit<Database['public']['Tables']['payments']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['payments']['Insert']>;
      };
      ai_chats: {
        Row: {
          id:         string;
          user_id:    string;
          mode:       string;
          query:      string;
          response:   string;
          context:    string | null;
          chapter:    string | null;
          done_by_name: string | null;
          created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['ai_chats']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['ai_chats']['Insert']>;
      };
      page_history: {
        Row: {
          id:           string;
          user_id:      string;
          url:          string;
          label:        string;
          archived:     boolean;
          done_by_name: string | null;
          created_at:   string;
        };
        Insert: Omit<Database['public']['Tables']['page_history']['Row'], 'created_at'>;
        Update: Partial<Database['public']['Tables']['page_history']['Insert']>;
      };
      generated_notes: {
        Row: {
          id:              string;
          user_id:         string;
          class_level:     string;
          subject:         string;
          book:            string;
          chapter:         string;
          chapter_number:  number | null;
          instructions:    string | null;
          pages:           Json;
          total_pages:     number;
          current_page:    number;
          annotations:     Json;
          rating:          string | null;
          share_token:     string | null;
          is_public:       boolean;
          done_by_name:    string | null;
          created_at:      string;
          updated_at:      string;
        };
        Insert: Omit<Database['public']['Tables']['generated_notes']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['generated_notes']['Insert']>;
      };
      generated_flashcards: {
        Row: {
          id:              string;
          user_id:         string;
          class_level:     string;
          subject:         string;
          book:            string;
          chapter:         string;
          chapter_number:  number | null;
          instructions:    string | null;
          cards:           Json;
          total_cards:     number;
          current_card:    number;
          annotations:     Json;
          rating:          string | null;
          share_token:     string | null;
          is_public:       boolean;
          done_by_name:    string | null;
          created_at:      string;
          updated_at:      string;
        };
        Insert: Omit<Database['public']['Tables']['generated_flashcards']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['generated_flashcards']['Insert']>;
      };
      collab_sessions: {
        Row: {
          id: string; host_id: string; invite_code: string; is_active: boolean;
          max_friends: number; expires_at: string; created_at: string; ended_at: string | null;
        };
      };
      collab_participants: {
        Row: {
          id: string; session_id: string; user_id: string; email: string; display_name: string;
          joined_at: string; last_seen_at: string; left_at: string | null;
        };
      };
      chat_groups: {
        Row: {
          id: string; host_id: string; session_id: string | null; name: string;
          is_default: boolean; is_dm: boolean; photo_path: string | null;
          created_by: string | null; created_at: string;
        };
      };
      chat_group_members: {
        Row: {
          group_id: string; user_id: string; nickname: string | null; last_read_at: string;
        };
      };
      chat_messages: {
        Row: {
          id: string; group_id: string; sender_id: string; sender_name: string;
          kind: 'text' | 'file' | 'voice' | 'poll' | 'transcript' | 'system';
          body: string | null; file_path: string | null; file_name: string | null;
          file_size: number | null; file_type: string | null;
          poll_question: string | null; poll_options: Json | null; poll_votes: Json | null;
          created_at: string; deleted_for_everyone: boolean;
        };
      };
      chat_message_hides: { Row: { message_id: string; user_id: string; created_at: string } };
      chat_message_reads: { Row: { message_id: string; user_id: string; read_at: string } };
      collab_board_strokes: {
        Row: {
          id: string; session_id: string; author_id: string; author_name: string;
          tool: string; color: string; size: number; alpha: number;
          points: Json; text_content: string | null; created_at: string;
        };
      };
      ai_followups: {
        Row: {
          id: string; user_id: string; done_by_id: string | null; done_by_name: string | null;
          page_url: string | null; page_label: string | null;
          question: string; answer: string; created_at: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}

// ─── App-level types ──────────────────────────────────────────────────────────
export type Profile    = Database['public']['Tables']['profiles']['Row'];
export type Payment    = Database['public']['Tables']['payments']['Row'];
export type AIChat     = Database['public']['Tables']['ai_chats']['Row'];
export type StudySession = Database['public']['Tables']['study_sessions']['Row'];
export type PageHistory  = Database['public']['Tables']['page_history']['Row'];
export type GeneratedNote = Database['public']['Tables']['generated_notes']['Row'];
export type GeneratedFlashcard = Database['public']['Tables']['generated_flashcards']['Row'];
export type CollabSession    = Database['public']['Tables']['collab_sessions']['Row'];
export type CollabParticipant = Database['public']['Tables']['collab_participants']['Row'];
export type ChatGroup   = Database['public']['Tables']['chat_groups']['Row'];
export type ChatMessage = Database['public']['Tables']['chat_messages']['Row'];
export type BoardStroke = Database['public']['Tables']['collab_board_strokes']['Row'];
export type AIFollowUp  = Database['public']['Tables']['ai_followups']['Row'];

// ─── Notes/Flashcard content types ────────────────────────────────────────────
export interface NotesSection {
  heading: string;
  content: string;
  isBold?: boolean;
  bulletPoints?: string[];
  subsections?: { heading: string; content: string }[];
  table?: { headers: string[]; rows: string[][] };
}

export interface NotesPage {
  pageNumber: number;
  sections: NotesSection[];
}

export interface NotesData {
  title: string;
  pages: NotesPage[];
}

export interface FlashcardData {
  id: number;
  front: string;
  back: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface FlashcardsData {
  title: string;
  cards: FlashcardData[];
}
