import { motion } from "framer-motion";
import { features } from "../data/features";
import FeatureCard from "./FeatureCard";
import HexGridBackground from "./HexGridBackground";
import TerminalWindow from "./TerminalWindow";
import StatsBar from "./StatsBar";

const FeaturesSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 py-10 text-white border-t border-slate-800/80">
      {/* Hex grid canvas background */}
      {/* <div className="pointer-events-none absolute inset-0">
        <HexGridBackground />
      </div> */}

      {/* Top radial glow */}
      {/* <div className="pointer-events-none absolute left-1/2 top-0 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/3">
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,hsl(185_100%_50%/0.08)_0%,transparent_60%)]" />
      </div> */}

      {/* Side accent glows */}
      {/* <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,hsl(260_100%_65%/0.06),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,hsl(185_100%_50%/0.04),transparent_70%)]" /> */}

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Label */}
              <div className="mb-5 flex items-center gap-3">
                <div className="relative flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
                  <div className="h-px w-10 bg-gradient-to-r from-primary/60 to-transparent" />
                </div>
                <span className="font-mono text-[18px] font-semibold uppercase tracking-[0.3em] text-primary">
                  What we do
                </span>
              </div>

              {/* Main heading */}
              <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl text-white">
                Research
                <br />
                <span className="text-gradient-cyber">Intelligence</span>
                <br />
                <span className="text-muted-foreground/60">Advisory</span>
              </h2>

              {/* Description */}
              <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:text-lg">
                Independent & unbiased research Ethical & responsible disclosure Deep technical analysis Executive-level strategic reporting Confidential engagements
              </p>
            </motion.div>
          </div>

          {/* Terminal window */}
          <div className="w-full max-w-md flex-shrink-0">
            <TerminalWindow />
          </div>
        </div>

        {/* Stats bar */}
        <div className="mb-16">
          <StatsBar />
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={feature.tag} feature={feature} index={index} />
          ))}
        </div>

        {/* Threat Map visualization */}
        {/* <div className="mb-16">
          <ThreatMap />
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;
