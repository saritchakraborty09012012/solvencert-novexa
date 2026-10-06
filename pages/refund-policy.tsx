import React from 'react';
import Link from 'next/link';
import CompanyLayout from '@/components/layout/CompanyLayout';

export default function RefundPolicyPage() {
  return (
    <CompanyLayout
      title="Refund Policy"
      description="SolveNCERT Refund Policy — our fair and transparent refund process for premium subscriptions."
      canonical="/refund-policy"
      breadcrumb="Refund Policy"
      lastUpdated="May 2025"
    >
      <h1>Refund Policy</h1>
      <p className="lead">We want you to be completely satisfied with SolveNCERT Premium. Here's our transparent refund policy.</p>

      <h2>1. Free Trial</h2>
      <p>All users receive a <strong>1-month free trial</strong> of Premium features, with no payment required. We encourage you to fully explore Premium features during this period before upgrading.</p>

      <h2>2. Premium Subscription — ₹99/month</h2>
      <p>Our Premium plan is priced at ₹99 per month. Payment is made via UPI and verified manually by our team after you submit your UTR number and payment screenshot.</p>

      <h2>3. Refund Eligibility</h2>
      <p>We offer a full refund in the following cases:</p>
      <ul>
        <li><strong>Duplicate payment:</strong> If you accidentally paid more than once for the same month.</li>
        <li><strong>Payment not credited:</strong> If your UPI payment was deducted but Premium was not activated within 24 hours of verification.</li>
        <li><strong>Technical inability to use service:</strong> If a critical platform issue prevented you from using Premium features for more than 7 consecutive days during your paid month.</li>
      </ul>

      <h2>4. Non-Refundable Cases</h2>
      <p>Refunds will <strong>not</strong> be provided in the following cases:</p>
      <ul>
        <li>Change of mind after Premium activation</li>
        <li>Forgetting to cancel before the next billing cycle</li>
        <li>Account suspension due to violation of Terms of Service</li>
        <li>Partial use of Premium features during the month</li>
      </ul>

      <h2>5. How to Request a Refund</h2>
      <p>To request a refund, email us at <a href="mailto:nde.noirdemons@atomicmail.io">nde.noirdemons@atomicmail.io</a> with:</p>
      <ul>
        <li>Your registered email address</li>
        <li>The 12-digit UTR number of the payment</li>
        <li>Reason for refund request</li>
      </ul>
      <p>We will review your request within <strong>3 business days</strong> and process eligible refunds within 5–7 business days via the original payment method.</p>

      <h2>6. Contact</h2>
      <p>For refund queries or payment issues, reach us at <a href="mailto:nde.noirdemons@atomicmail.io">nde.noirdemons@atomicmail.io</a> or visit our <Link href="/contact">Contact page</Link>.</p>
    </CompanyLayout>
  );
}
