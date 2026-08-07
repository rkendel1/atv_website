import SimplePage from "@/components/simple-page";

export default function ProductPage() {
  return (
    <SimplePage
      title="Product"
      subtitle="Agent Trust Vault secures governed artifacts, credentials, and documents for humans and AI agents across workflows."
      sections={[
        {
          title: "Rebrand Scope",
          items: [
            "Secure Artifact Fabric → Agent Trust Vault",
            "Repository: agent-trust-vault",
            "Core: @agenttrustvault/core",
            "SDK: @agenttrustvault/sdk",
            "Buzz Plugin: @agenttrustvault/buzz",
          ],
        },
        {
          title: "Trust Platform",
          items: [
            "Policy Engine",
            "Delegation",
            "Capability issuance and revocation",
            "Secure execution and complete audit",
          ],
        },
      ]}
    />
  );
}
