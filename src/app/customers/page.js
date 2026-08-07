import SimplePage from "@/components/simple-page";

export default function CustomersPage() {
  return (
    <SimplePage
      title="Customers"
      subtitle="Customer onboarding and management foundation for secure expansion."
      sections={[
        {
          title: "Customer Portal",
          items: [
            "Subscriptions",
            "Installations",
            "Organizations",
            "Seats",
            "API Keys",
            "Tokens",
            "Billing and Invoices",
            "Downloads and Support",
          ],
        },
        {
          title: "Organization Management",
          items: [
            "Invite members",
            "Assign roles",
            "Manage seats",
            "Rotate tokens",
            "Create workspaces",
            "Manage domains",
          ],
        },
      ]}
    />
  );
}
