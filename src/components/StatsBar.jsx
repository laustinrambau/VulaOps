import { motion } from "framer-motion";

const StatCard = ({ value, label, suffix, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative text-center"
  >
    <div className="relative">
      <span className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
        {value}
      </span>
      {suffix && (
        <span className="ml-1 text-lg font-medium text-primary">{suffix}</span>
      )}
    </div>

    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      {label}
    </p>

    <div className="mx-auto mt-3 h-px w-12 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
  </motion.div>
);

const StatsBar = () => {
  const stats = [
    { value: "2.4B", suffix: "+", label: "IOCs Processed Daily" },
    { value: "98.7", suffix: "%", label: "Detection Accuracy" },
    { value: "150", suffix: "+", label: "Intel Sources" },
    { value: "< 15", suffix: "min", label: "Avg Response Time" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-xl border border-border glass-surface p-8"
    >
      {/* Animated top border */}
      <div className="absolute left-0 right-0 top-0 h-px overflow-hidden">
        <div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-data-flow"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} {...stat} delay={i * 0.1} />
        ))}
      </div>
    </motion.div>
  );
};

export default StatsBar;