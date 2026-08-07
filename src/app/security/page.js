import SimplePage from "@/components/simple-page";

export default function SecurityPage() {
  return (
    <SimplePage
      title="Security"
      subtitle="ATV enforces high-trust controls and telemetry with zero secret collection."
      sections={[
        {
          title: "Controls",
          items: [
            "Policy-based access",
            "Temporary capabilities",
            "Execution isolation",
            "Complete audit trails",
          ],
        },
        {
          title: "Telemetry (Opt-in)",
          items: [
            "Install count",
            "Version",
            "Capabilities enabled",
            "Anonymous usage",
            "Health and errors",
            "No secrets ever collected",
          ],
        },
      ]}
    />
  );
}
