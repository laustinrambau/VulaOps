import Threatmap from './ThreatMap'

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-slate-800/80 bg-slate-950 py-20 border-slate-800/80"
    >
      <div className="container mx-full">
        {/* Left Column */}
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[18px] uppercase tracking-[0.2em] text-yellow-700">
            About Us
          </h2>
          <p className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Who We Are
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6 lg:col-span-2">
              <p className="text-lg text-slate-300 leading-relaxed">
                We are an independent{' '}
                <span className="font-semibold text-yellow-700">
                  cybersecurity research and intelligence organization
                </span>{' '}
                dedicated to identifying, analyzing, and mitigating emerging cyber threats.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
              Our team of expert researchers, red team operators, and threat analysts conducts in-depth technical research, threat modeling, vulnerability discovery, and strategic risk analysis to help organizations stay ahead of attackers.

            <br /> <br /><span className="font-semibold text-yellow-700"> VulaOps</span> was formed to provide <span className="font-bold">high-end digital security services to Africa’s </span> start-ups, not-for-profit organizations, and government agencies. <br /><br /> Our operators bring more than <span className='font-bold'>10 years</span> of information security experience, combining local insight with global expertise.

              We are committed to delivering quality work at reasonable rates, helping clients strengthen their digital resilience while contributing to the growth and maturity of Africa’s cybersecurity ecosystem.

            <br /><br />  Through our services — including attack surface management, red teaming, penetration testing, continuous reconnaissance, and vulnerability research — we enable organizations to identify exposures, secure critical assets, and defend against advanced threats.
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
          </div>
        </div>
      </div>
    </section>
  )
}