import SimplePage from "@/components/simple-page";

export default function SolutionsPage() {
  return (
    <SimplePage
      title="Solutions"
      subtitle="Deploy ATV across personal, team, and enterprise AI workflows."
      sections={[
        {
          title: "Use Cases",
          items: [
            "Human-to-agent approvals",
            "Agent-to-agent delegation",
            "Cross-tool trust governance",
            "Compliance-ready audit trails",
          ],
        },
        {
          title: "Deployment Targets",
          items: ["Buzz", "VS Code", "Claude Desktop", "Cursor", "MCP", "CLI"],
        },
      ]}
    />
  );
}
