import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "$ initiating threat_scan --mode=active",
  "> scanning 2.4B indicators of compromise...",
  "> cross-referencing dark web feeds [████████░░] 82%",
  "> APT correlation engine: 14 active groups tracked",
  "> zero-day signatures updated: 340+ CVEs",
  "$ status: ALL SYSTEMS OPERATIONAL ✓",
];

const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 15 + Math.random() * 25);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative overflow-hidden rounded-lg border bg-white border-border bg-card/80 text-yellow-600"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <div className="h-2.5 w-2.5 rounded-full bg-[hsl(45_100%_50%/0.6)]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--success)/0.6)]" />
        <span className="ml-2 font-mono text-[10px] text-muted-foreground">
          threat-intel-v4.2.1 — live feed
        </span>
      </div>

      <div className="p-4 font-mono text-xs leading-relaxed">
        {visibleLines.map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="select-none text-muted-foreground/40">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={
                line.includes("$")
                  ? "text-primary"
                  : line.includes("✓")
                  ? "text-[hsl(var(--success))]"
                  : "text-muted-foreground"
              }
            >
              {line}
              {i === visibleLines.length - 1 &&
                currentLine < lines.length && (
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-primary" />
                )}
            </span>
          </div>
        ))}

        {visibleLines.length === 0 && (
          <span className="inline-block h-3.5 w-1.5 animate-pulse bg-primary" />
        )}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;