export default function SimplePage({ title, subtitle, sections = [] }) {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">{subtitle}</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <section
            key={section.title}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
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
          </section>
        ))}
      </div>
    </main>
  );
}
