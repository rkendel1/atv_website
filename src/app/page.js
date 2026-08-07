const flow = [
  "Human Approves",
  "Agent Trust Vault Issues Temporary Capability",
  "AI Agent Executes",
  "Secret Destroyed",
];

const features = [
  "Human → Agent",
  "Agent → Agent",
  "Agent → Human",
  "Human → Human",
  "Policy Engine",
  "Delegation",
  "Secure Execution",
  "Complete Audit",
  "Marketplace Ready",
  "MCP Compatible",
];

const integrations = [
  "Buzz",
  "VS Code",
  "Claude Desktop",
  "Cursor",
  "GitHub",
  "MCP",
  "Slack",
  "Teams",
  "Coming Soon...",
];

const productSections = [
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
];

const platformSections = [
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
];

const solutionsSections = [
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
];

const pricingSections = [
  {
    title: "Public Plans",
    items: [
      "Community · Free · OSS + Buzz + Local + Single Workspace",
      "Pro · $19/month · Unlimited artifacts + VS Code + Claude + Cursor",
      "Teams · $99/month · Organizations + SSO + audit + team policies",
      "Enterprise · Custom · On-prem + private cloud + compliance + support",
    ],
  },
  {
    title: "Subscription Foundation",
    items: [
      "Model: Starter, Professional, Business, Enterprise",
      "Metering: Artifacts, Executions, Agents, Organizations, Storage, API Calls",
      "Billing: Trials, usage, taxes, coupons, invoices, customer portal",
    ],
  },
];

const developersSections = [
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
];

const securitySections = [
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
];

const aboutSections = [
  {
    title: "Brand",
    items: ["Logo: ATV", "Palette: Black, White, Emerald, Slate, Electric Blue"],
  },
  {
    title: "Design Principles",
    items: ["Enterprise", "Developer-first", "Minimal", "High Trust"],
  },
];

const installSections = [
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
];

const openSourceSections = [
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
];

const docsSections = [
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
];

const customersSections = [
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
];

function SectionRenderer({ id, title, subtitle, sections }) {
  return (
    <section id={id} className="mt-16 scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 max-w-3xl text-slate-700">{subtitle}</p>}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
            {section.description && (
              <p className="mt-2 text-sm text-slate-700">{section.description}</p>
            )}
            {section.items?.length ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <section id="hero" className="rounded-2xl bg-black p-8 text-white md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Agent Trust Vault</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Trust Every Agent. Expose No Secrets.
        </h1>
        <p className="mt-4 max-w-3xl text-slate-200">
          Agent Trust Vault is the trust layer for AI. Humans, agents, and workflows collaborate with
          governed secrets, credentials, documents, and protected artifacts without exposing sensitive
          information.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {[
            "Start Free",
            "Book Demo",
            "Install",
            "GitHub",
          ].map((cta) => (
            <span key={cta} className="rounded-full border border-white/25 px-4 py-2">
              {cta}
            </span>
          ))}
        </div>
      </section>

      <section id="overview" className="mt-16 scroll-mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Capability Lifecycle</h3>
            <ol className="mt-4 space-y-2 text-sm text-slate-700">
              {flow.map((step) => (
                <li key={step} className="rounded-lg border border-slate-200 px-3 py-2">
                  {step}
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Core Features</h3>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="rounded-lg border border-slate-200 px-3 py-2">
                  ✓ {feature}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Integrations</h3>
            <ul className="mt-4 space-y-1 text-sm text-slate-700">
              {integrations.map((integration) => (
                <li key={integration} className="rounded-lg px-2 py-1">
                  {integration}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <SectionRenderer
        id="product"
        title="Product"
        subtitle="Agent Trust Vault secures governed artifacts, credentials, and documents for humans and AI agents across workflows."
        sections={productSections}
      />

      <SectionRenderer
        id="platform"
        title="Platform"
        subtitle="Interactive trust architecture for secure AI collaboration."
        sections={platformSections}
      />

      <SectionRenderer
        id="solutions"
        title="Solutions"
        subtitle="Deploy ATV across personal, team, and enterprise AI workflows."
        sections={solutionsSections}
      />

      <SectionRenderer
        id="pricing"
        title="Pricing"
        subtitle="Community and commercial plans with Stripe-backed subscriptions, invoices, and seat management."
        sections={pricingSections}
      />

      <SectionRenderer
        id="developers"
        title="Developers"
        subtitle="Build secure agentic systems with the Agent Trust Vault SDK and platform APIs."
        sections={developersSections}
      />

      <SectionRenderer
        id="security"
        title="Security"
        subtitle="ATV enforces high-trust controls and telemetry with zero secret collection."
        sections={securitySections}
      />

      <SectionRenderer
        id="about"
        title="About"
        subtitle="Agent Trust Vault is building the trust layer for AI collaboration."
        sections={aboutSections}
      />

      <SectionRenderer
        id="install"
        title="Install"
        subtitle="Install ATV into your preferred AI environment with copyable command, verification, and health checks."
        sections={installSections}
      />

      <SectionRenderer
        id="open-source"
        title="Open Source"
        subtitle="Core and SDK remain open while hosted enterprise features are commercial."
        sections={openSourceSections}
      />

      <SectionRenderer
        id="documentation"
        title="Documentation"
        subtitle="Documentation hub for onboarding, integrations, and enterprise deployment."
        sections={docsSections}
      />

      <SectionRenderer
        id="blog"
        title="Blog"
        subtitle="Product updates, security write-ups, and agent trust engineering notes."
        sections={[
          {
            title: "Topics",
            items: ["Launch updates", "Platform roadmap", "Security explainers", "Integration tutorials"],
          },
        ]}
      />

      <SectionRenderer
        id="customers"
        title="Customers"
        subtitle="Customer onboarding and management foundation for secure expansion."
        sections={customersSections}
      />

      <section id="contact" className="mt-16 scroll-mt-20 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-2 max-w-3xl text-slate-700">
          Start free, request a demo, or discuss enterprise deployment with the ATV team.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <p className="font-semibold text-slate-900">Sales</p>
            <p className="mt-1 text-sm text-slate-700">sales@agenttrustvault.com</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Support</p>
            <p className="mt-1 text-sm text-slate-700">support@agenttrustvault.com</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Security</p>
            <p className="mt-1 text-sm text-slate-700">security@agenttrustvault.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}
