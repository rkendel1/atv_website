import SimplePage from "@/components/simple-page";

export default function DevelopersPage() {
  return (
    <SimplePage
      title="Developers"
      subtitle="Build secure agentic systems with the Agent Trust Vault SDK and platform APIs."
      sections={[
        {
          title: "Developer Portal",
          items: [
            "SDK Docs",
            "API Docs",
            "Quick Start",
            "Examples",
            "Marketplace",
            "CLI",
            "Templates",
            "Tutorials",
          ],
        },
        {
          title: "Open Source Packages",
          items: [
            "@agenttrustvault/core",
            "@agenttrustvault/sdk",
            "@agenttrustvault/buzz",
            "VS Code Adapter",
            "Examples",
          ],
        },
      ]}
    />
  );
}
