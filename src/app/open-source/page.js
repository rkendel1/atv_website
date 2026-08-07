import SimplePage from "@/components/simple-page";

export default function OpenSourcePage() {
  return (
    <SimplePage
      title="Open Source"
      subtitle="Core and SDK remain open while hosted enterprise features are commercial."
      sections={[
        {
          title: "Public Repository",
          items: ["Core", "SDK", "Buzz Adapter", "VS Code Adapter", "Examples"],
        },
        {
          title: "Commercial Offering",
          items: [
            "Enterprise features",
            "Hosted portal",
            "Billing",
            "Customer management",
            "Enterprise connectors",
          ],
        },
      ]}
    />
  );
}
