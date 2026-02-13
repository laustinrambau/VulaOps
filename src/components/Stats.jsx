

const stats = [
  { value: 'Identify', label: 'Identify, map, and continuously manage your attack surface before adversaries exploit it.' },
  { value: 'Secure', label: 'Security maturity is achieved when vulnerabilities are reduced and attack surfaces are identified.' },
  { value: 'Defend', label: 'Security is not just about preventing attacks, it’s about detecting and defending effectively.' },
]

export default function Stats() {
  return (
    <section className="border-y border-slate-800/80 bg-slate-950 py-6">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="relative font-mono text-2xl font-thin text-white md:text-3xl uppercase text-yellow-700 mb-[20px]
              after:block after:absolute after:left-1/2 after:bottom-[-6px] after:h-[2px] after:w-1/2 after:-translate-x-1/2 after:bg-yellow-700">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
