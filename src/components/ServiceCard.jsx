import React from 'react';
import { motion } from 'framer-motion';

export default function ServiceCard({ service }) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group rounded-xl border border-slate-700/50 bg-slate-800/20 p-6 transition hover:border-slate-600 hover:bg-slate-800/40"
    >
      <div className="text-yellow-700">{service.icon}</div>
      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-yellow-700/80">
        {service.tagline}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-slate-400">{service.description}</p>
      <a
        href={service.href}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-amber-400 transition hover:text-amber-300"
      >
        Learn more
        <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </motion.article>
  );
}