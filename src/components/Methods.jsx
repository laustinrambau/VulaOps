"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const sections = [
  {
    label: "Threat Intelligence",
    number: 1,
    description:
      "We monitor, investigate, and analyze the threat landscape to help organisations stay ahead of sophisticated attackers.",
    analyse: [
      "Advanced Persistent Threats (APTs)",
      "Ransomware campaigns",
      "Phishing and social engineering trends",
      "Nation-state threat actors",
      "Dark web activity",
      "Malware evolution",
    ],
    deliverables: [
      "Threat reports",
      "Intelligence briefings",
      "Risk impact assessments",
      "Executive summaries",
    ],
  },
  {
    label: "Vulnerability Research",
    number: 2,
    description:
      "We discover and validate security flaws across software, web applications, and infrastructure, following responsible disclosure standards.",
    conduct: [
      "Software vulnerability discovery",
      "Web application security testing",
      "Infrastructure security assessments",
      "Zero-day research",
      "Proof-of-concept development",
    ],
    approach:
      "We follow ethical and secure disclosure practices to ensure vendors are notified responsibly and remediations can be deployed safely.",
  },
  {
    label: "Incident Research",
    number: 3,
    description:
      "We investigate how breaches happen, how attackers move, and how data is exfiltrated to strengthen detection and response strategies.",
    analyse: [
      "Breach methodologies and kill chains",
      "Initial access and attack vectors",
      "Post-exploitation techniques",
      "Lateral movement patterns",
      "Data exfiltration behaviour",
    ],
    outcomes:
      "Our findings help organisations refine detection logic, harden controls, and improve incident response playbooks.",
  },
  {
    label: "Cyber Risk",
    number: 4,
    description:
      "We translate technical findings into business-aligned risk insights and security strategy.",
    provide: [
      "Cyber risk modeling",
      "Security posture assessments",
      "Policy and governance guidance",
      "Regulatory impact analysis",
      "Security architecture advisory",
    ],
    serves:
      "CISOs, security leaders, and executive teams looking for independent, research-led guidance.",
  },
]

export default function CyberSectionsTabs() {
  const [selected, setSelected] = useState(sections[0])

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 space-y-6 bg-slate-800/30 rounded-xl border border-slate-700/60 p-6">
      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 border-b border-slate-700/50">
        {sections.map((sec) => (
          <motion.button
            key={sec.label}
            onClick={() => setSelected(sec)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
              sec === selected
                ? "bg-yellow-700/20 text-yellow-300"
                : "text-slate-300 hover:bg-slate-700/30"
            }`}
            layoutId={sec === selected ? "active-tab" : undefined}
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-yellow-700/20 text-xs font-mono text-yellow-700">
              {sec.number}
            </span>
            {sec.label}
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <p className="text-sm text-slate-300">{selected.description}</p>

          <div className="grid gap-4 md:grid-cols-2">
            {selected.analyse && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  We analyse
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {selected.analyse.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selected.conduct && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  We conduct
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {selected.conduct.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selected.deliverables && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Deliverables
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {selected.deliverables.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selected.approach && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Approach
                </p>
                <p className="mt-2 text-sm text-slate-300">{selected.approach}</p>
              </div>
            )}

            {selected.outcomes && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Outcomes
                </p>
                <p className="mt-2 text-sm text-slate-300">{selected.outcomes}</p>
              </div>
            )}

            {selected.provide && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  We provide
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                  {selected.provide.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {selected.serves && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Who it serves
                </p>
                <p className="mt-2 text-sm text-slate-300">{selected.serves}</p>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}