export default function Research() {
  return (
    <section id="research" className="scroll-mt-20 border-t border-slate-800/80 bg-slate-900/40 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-700">
          Our Core Focus Areas
        </h2>
        <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          Research, Intelligence & Advisory
        </p>

        <div className="mt-10 space-y-10">
          {/* 1️⃣ Threat Intelligence & Analysis */}
          <section className="rounded-xl border border-slate-700/60 bg-slate-800/30 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-700/20 text-xs font-mono text-yellow-700">
                1
              </span>
              Threat Intelligence &amp; Analysis
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              We monitor, investigate, and analyze the threat landscape to help organisations stay
              ahead of sophisticated attackers.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  We analyse
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Advanced Persistent Threats (APTs)</li>
                  <li>Ransomware campaigns</li>
                  <li>Phishing and social engineering trends</li>
                  <li>Nation-state threat actors</li>
                  <li>Dark web activity</li>
                  <li>Malware evolution</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Deliverables
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Threat reports</li>
                  <li>Intelligence briefings</li>
                  <li>Risk impact assessments</li>
                  <li>Executive summaries</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2️⃣ Vulnerability Research & Responsible Disclosure */}
          <section className="rounded-xl border border-slate-700/60 bg-slate-800/30 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-700/20 text-xs font-mono text-yellow-700">
                2
              </span>
              Vulnerability Research &amp; Responsible Disclosure
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              We discover and validate security flaws across software, web applications, and
              infrastructure, following responsible disclosure standards.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  We conduct
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Software vulnerability discovery</li>
                  <li>Web application security testing</li>
                  <li>Infrastructure security assessments</li>
                  <li>Zero-day research</li>
                  <li>Proof-of-concept development</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Approach
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  We follow ethical and secure disclosure practices to ensure vendors are notified
                  responsibly and remediations can be deployed safely.
                </p>
              </div>
            </div>
          </section>

          {/* 3️⃣ Incident Research & Digital Forensics */}
          <section className="rounded-xl border border-slate-700/60 bg-slate-800/30 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-700/20 text-xs font-mono text-yellow-700">
                3
              </span>
              Incident Research &amp; Digital Forensics
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              We investigate how breaches happen, how attackers move, and how data is exfiltrated to
              strengthen detection and response strategies.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  We analyse
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Breach methodologies and kill chains</li>
                  <li>Initial access and attack vectors</li>
                  <li>Post-exploitation techniques</li>
                  <li>Lateral movement patterns</li>
                  <li>Data exfiltration behaviour</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Outcomes
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Our findings help organisations refine detection logic, harden controls, and
                  improve incident response playbooks.
                </p>
              </div>
            </div>
          </section>

          {/* 4️⃣ Cyber Risk & Strategic Advisory */}
          <section className="rounded-xl border border-slate-700/60 bg-slate-800/30 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-700/20 text-xs font-mono text-yellow-700">
                4
              </span>
              Cyber Risk &amp; Strategic Advisory
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              We translate technical findings into business-aligned risk insights and security
              strategy.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  We provide
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  <li>Cyber risk modeling</li>
                  <li>Security posture assessments</li>
                  <li>Policy and governance guidance</li>
                  <li>Regulatory impact analysis</li>
                  <li>Security architecture advisory</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Who it serves
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  CISOs, security leaders, and executive teams looking for independent, research-led
                  guidance.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Additional sections derived from your content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Research Publications */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
              Research Publications
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              We publish research designed for CISOs, security teams, government agencies,
              compliance officers, and executive leadership.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>Annual Threat Landscape Reports</li>
              <li>Industry-Specific Security Reports</li>
              <li>Technical Whitepapers</li>
              <li>Vulnerability Disclosure Reports</li>
              <li>Security Framework Analysis</li>
            </ul>
          </section>

          {/* Research Methodology */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
              Research Methodology
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Our research combines deep technical analysis with strategic context to deliver
              intelligence that drives decisions.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>Data collection &amp; threat monitoring</li>
              <li>Behavioral pattern analysis</li>
              <li>Reverse engineering &amp; vulnerability validation</li>
              <li>Impact assessment</li>
              <li>Responsible disclosure</li>
              <li>Public or private reporting</li>
            </ul>
          </section>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Industries We Support */}
          <section>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
              Industries We Support
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              <li>Financial services</li>
              <li>Government &amp; public sector</li>
              <li>Healthcare</li>
              <li>Education</li>
              <li>Technology companies</li>
              <li>Critical infrastructure</li>
            </ul>
          </section>

          {/* Partnerships & Collaboration / Why Work With Us */}
          <section className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
                Partnerships &amp; Collaboration
              </h3>
              <p className="mt-3 text-sm text-slate-300">
                We collaborate with security vendors, law enforcement (where appropriate), academic
                institutions, technology firms, and policy makers.
              </p>
              <p className="mt-2 text-sm text-slate-300">
                If you are interested in research collaboration, responsible disclosure coordination,
                or joint publications,{' '}
                <a href="#contact" className="text-amber-400 underline-offset-4 hover:underline">
                  contact us
                </a>
                .
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-700">
                Why Work With Us
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>Independent &amp; unbiased research</li>
                <li>Ethical &amp; responsible disclosure</li>
                <li>Deep technical analysis</li>
                <li>Executive-level strategic reporting</li>
                <li>Confidential engagements</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
