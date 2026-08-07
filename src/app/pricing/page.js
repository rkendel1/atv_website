import SimplePage from "@/components/simple-page";

export default function PricingPage() {
  return (
    <SimplePage
      title="Pricing"
      subtitle="Community and commercial plans with Stripe-backed subscriptions, invoices, and seat management."
      sections={[
        {
          title: "Public Plans",
          items: [
            "Community · Free · OSS + Buzz + Local + Single Workspace",
            "Pro · $19/month · Unlimited artifacts + VS Code + Claude + Cursor",
            "Teams · $99/month · Organizations + SSO + audit + team policies",
            "Enterprise · Custom · On-prem + private cloud + compliance + support",
          ],
        },
        {
          title: "Subscription Foundation",
          items: [
            "Model: Starter, Professional, Business, Enterprise",
            "Metering: Artifacts, Executions, Agents, Organizations, Storage, API Calls",
            "Billing: Trials, usage, taxes, coupons, invoices, customer portal",
          ],
        },
      ]}
    />
  );
}
