const footerLinks = {
  solutions: [
    { label: 'Services', href: '#services' },
    { label: 'Research', href: '#research' },
    { label: 'Use cases', href: '#use-cases' },
  ],
  company: [
    { label: 'About us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Threat intelligence', href: '#services' },
    { label: 'Compliance (POPIA · GDPR)', href: '#about' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 border-b border-slate-800/80 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-lg font-semibold text-yellow-700">VulaOps</p>
            <p className="mt-2 text-sm text-slate-500">Cybersecurity Research. South Africa.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Solutions
            </p>
            <ul className="mt-3 space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Company
            </p>
            <ul className="mt-3 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Resources
            </p>
            <ul className="mt-3 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} VulaOps. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#services" className="text-sm text-slate-500 transition hover:text-white">
              Services
            </a>
            <a href="#contact" className="text-sm text-slate-500 transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
