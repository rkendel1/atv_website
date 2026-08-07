import SimplePage from "@/components/simple-page";

export default function ContactPage() {
  return (
    <SimplePage
      title="Contact"
      subtitle="Start free, request a demo, or discuss enterprise deployment with the ATV team."
      sections={[
        {
          title: "Contact Paths",
          items: ["Sales: sales@agenttrustvault.com", "Support: support@agenttrustvault.com", "Security: security@agenttrustvault.com"],
        },
      ]}
    />
  );
}
