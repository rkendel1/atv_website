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

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <section className="rounded-2xl bg-black p-8 text-white md:p-12">
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

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Capability Lifecycle</h2>
          <ol className="mt-4 space-y-2 text-sm text-slate-700">
            {flow.map((step) => (
              <li key={step} className="rounded-lg border border-slate-200 px-3 py-2">
                {step}
              </li>
            ))}
          </ol>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold">Core Features</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="rounded-lg border border-slate-200 px-3 py-2">
                ✓ {feature}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold">Integrations</h2>
        <div className="mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-5">
          {integrations.map((integration) => (
            <div key={integration} className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
              {integration}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
