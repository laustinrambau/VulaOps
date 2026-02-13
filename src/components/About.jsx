export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-slate-800/80 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
          About Us
        </h2>
        <p className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Who We Are
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              We are an independent{' '}
              <span className="font-semibold text-yellow-700">
                cybersecurity research and intelligence firm
              </span>{' '}
              dedicated to identifying, analyzing, and mitigating emerging cyber threats.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our team conducts in-depth technical research, threat modeling, vulnerability
              discovery, and strategic risk analysis to help organizations stay ahead of attackers.
            </p>

            <div className="grid gap-6 pt-4 border-t border-slate-700/50 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                  Our Mission
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  To strengthen digital resilience through cutting-edge cybersecurity research,
                  intelligence reporting, and responsible disclosure.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
                  Our Vision
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  To become a trusted authority in cybersecurity research across enterprise,
                  government, and critical infrastructure sectors.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="rounded-full border border-yellow-700/50 bg-yellow-700/10 px-4 py-2 font-mono text-sm text-yellow-600">
                South Africa
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-600/10 px-4 py-2 font-mono text-sm text-slate-300">
                POPIA · GDPR
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative aspect-square max-w-sm rounded-2xl border border-slate-700/50 bg-slate-800/30 p-8">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-yellow-700/20 to-transparent opacity-50" />
              <div className="relative flex h-full flex-col justify-center text-center">
                <p className="font-mono text-6xl font-bold text-yellow-700">VulaOps</p>
                <p className="mt-2 text-sm uppercase tracking-widest text-slate-500">
                  Cybersecurity Research
                </p>
                <div className="mt-6 flex flex-col gap-2 text-xs text-slate-400">
                  <p>Threat Intelligence & Analysis</p>
                  <p>Vulnerability Research</p>
                  <p>Risk & Strategic Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
