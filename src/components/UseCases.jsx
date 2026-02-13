const useCases = [
  'Ransomware',
  'APTs',
  'Phishing',
  'Data loss',
  'Account takeover',
  'Insider threats',
  'Supply chain attacks',
  'Business email compromise',
]

export default function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-20 border-t border-slate-800/80 bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
          Use cases
        </h2>
        <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Discover how we defend the full range of attack vectors
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {useCases.map((name) => (
            <span
              key={name}
              className="rounded-full border border-slate-600/80 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-yellow-700/50 hover:bg-slate-800/80 hover:text-white"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
