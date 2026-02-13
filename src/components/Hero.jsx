export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 pb-[15px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      >
        <source src="https://www.pexels.com/download/video/854913/" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-950/80 to-slate-900/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(180,83,9,0.2),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(71,85,105,0.15),_transparent_50%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-1 lg:items-center lg:gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-yellow-700/30 bg-yellow-700/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-700 animate-pulse" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
                Research. Secure. Defend. Evolve.
              </p>
            </div>

            <h1 className="text-2xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[75px]">
              <span className="text-5xl uppercase tracking-wide">Defensive Cybersecurity</span>
              <br/>
              <span className="bg-gradient-to-r from-yellow-700 via-amber-400 to-yellow-700 bg-clip-text text-transparent">
                Through Research & Intelligence
                <br />
              </span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-slate-400 md:text-md">
              We identify emerging threats, analyze vulnerabilities, and deliver actionable
              intelligence to protect organizations in an evolving digital landscape.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#research"
                className="group inline-flex items-center gap-2 rounded-lg bg-yellow-700 px-6 py-3.5 font-semibold text-white transition hover:bg-yellow-600 hover:shadow-lg hover:shadow-yellow-700/20"
              >
                Explore Our Research
                <svg
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3.5 font-medium text-slate-300 transition hover:border-slate-500 hover:bg-slate-800/50 hover:text-white"
              >
                Request Advisory
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-2 text-sm font-medium text-slate-300 underline-offset-4 hover:text-white hover:underline"
              >
                Partner With Us
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-slate-800 pt-8">
              <div>
                <p className="text-3xl font-bold text-white">360°</p>
                <p className="mt-1 text-md text-slate-400">Threat Intelligence</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">4</p>
                <p className="mt-1 text-md text-slate-400">Core Focus Areas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">Multi-sector</p>
                <p className="mt-1 text-md text-slate-400">Enterprise & Government</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
