import SimplePage from "@/components/simple-page";

export default function InstallPage() {
  return (
    <SimplePage
      title="Install"
      subtitle="Install ATV into your preferred AI environment with copyable command, verification, and health checks."
      sections={[
        {
          title: "Install Targets",
          items: ["Buzz", "VS Code", "Claude Desktop", "MCP", "CLI"],
        },
        {
          title: "Per-Integration Flow",
          items: ["Copy command", "Verify install", "Run health check", "Apply configuration"],
        },
        {
          title: "Downloads",
          items: ["NPM", "Docker", "Helm", "Binary", "Homebrew", "Winget", "Chocolatey", "VSIX", "Claude Package"],
        },
      ]}
    />
  );
}
