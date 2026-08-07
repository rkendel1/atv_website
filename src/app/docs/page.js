import SimplePage from "@/components/simple-page";

export default function DocsPage() {
  return (
    <SimplePage
      title="Docs"
      subtitle="Documentation hub for onboarding, integrations, and enterprise deployment."
      sections={[
        {
          title: "Core Documentation",
          items: [
            "Getting Started",
            "Concepts",
            "Architecture",
            "Security",
            "SDK",
            "CLI",
            "Enterprise",
            "Reference",
          ],
        },
        {
          title: "Integration Guides",
          items: ["Buzz", "Claude", "VS Code", "Cursor", "MCP"],
        },
      ]}
    />
  );
}
