const pillars = [
  {
    title: 'Defend intelligently',
    description: 'Research and intelligence that learns from your environment to spot anomalous and novel threats.',
  },
  {
    title: 'Defend at speed',
    description: 'Faster triage, detection, and response—without disrupting the business.',
  },
  {
    title: 'Defend across boundaries',
    description: 'Visibility across network, cloud, and identity—track threats across domains.',
  },
  {
    title: 'Defend with ease',
    description: 'Advisory and automation that prioritise what matters most for your organisation.',
  },
]

export default function WhyVulaOps() {
  return (
    <section className="border-t border-slate-800/80 bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
          Why VulaOps
        </h2>
        <p className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          The VulaOps difference
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-6 transition hover:border-slate-600/80"
            >
              <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="mt-2 text-slate-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
