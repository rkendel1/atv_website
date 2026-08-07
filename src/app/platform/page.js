import SimplePage from "@/components/simple-page";

export default function PlatformPage() {
  return (
    <SimplePage
      title="Platform"
      subtitle="Interactive trust architecture for secure AI collaboration."
      sections={[
        {
          title: "Architecture Flow",
          items: ["Identity", "Trust", "Policy", "Capability", "Execution", "Audit"],
        },
        {
          title: "Execution Model",
          items: [
            "Time-bound capabilities",
            "Least privilege artifacts",
            "End-to-end traceability",
            "No secret exposure to agents",
          ],
        },
      ]}
    />
  );
}
