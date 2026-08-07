import SimplePage from "@/components/simple-page";

export default function PortalPage() {
  return (
    <SimplePage
      title="Customer Portal"
      subtitle="Account and workspace foundation with authentication, subscriptions, and operations controls."
      sections={[
        {
          title: "Authentication Foundation",
          items: ["Auth.js", "Google", "GitHub", "Microsoft", "Email", "Passkeys"],
        },
        {
          title: "Workspace",
          items: ["Artifacts", "Policies", "Agents", "Relationships", "Audit", "Members", "Installations"],
        },
        {
          title: "Billing",
          items: ["Stripe", "Subscriptions", "Invoices", "Taxes", "Coupons", "Seat management"],
        },
        {
          title: "Admin Console",
          items: [
            "Customers",
            "Subscriptions",
            "Feature flags",
            "Support",
            "Usage",
            "Licensing",
            "Announcements",
          ],
        },
      ]}
    />
  );
}
