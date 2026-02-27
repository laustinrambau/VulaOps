import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";


const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3D tilt effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);
  const glareX = useSpring(useTransform(mouseX, [0, 1], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [0, 1], [0, 100]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.06,
        ease: [0.21, 0.68, 0.35, 0.98],
      }}
      className="group relative [perspective:1200px]"
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative h-full"
      >
        {/* Multi-layer border glow */}
        <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background: "linear-gradient(135deg, hsl(185 100% 50% / 0.35), hsl(260 100% 65% / 0.2), hsl(185 100% 50% / 0.15))",
            filter: "blur(1px)",
          }}
        />

        {/* Main card */}
        <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-700 group-hover:border-transparent group-hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]">
          
          {/* Holographic glare overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([x, y]) =>
                  `radial-gradient(circle at ${x}% ${y}%, hsl(185 100% 50% / 0.08) 0%, transparent 50%)`
              ),
            }}
          />

          {/* Noise texture overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Animated corner brackets */}
          <svg className="pointer-events-none absolute left-3 top-3 h-5 w-5 text-primary/0 transition-all duration-500 group-hover:text-primary/50" viewBox="0 0 20 20" fill="none">
            <path d="M0 8V0H8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-primary/0 transition-all duration-500 group-hover:text-primary/50" viewBox="0 0 20 20" fill="none">
            <path d="M20 8V0H12" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 text-primary/0 transition-all duration-500 group-hover:text-primary/30" viewBox="0 0 20 20" fill="none">
            <path d="M0 12V20H8" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <svg className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 text-primary/0 transition-all duration-500 group-hover:text-primary/30" viewBox="0 0 20 20" fill="none">
            <path d="M20 12V20H12" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Scanline animation on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute left-0 right-0 h-20 bg-gradient-to-b from-primary/[0.03] to-transparent"
              style={{
                animation: "scan-line 4s linear infinite",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col p-7">
            {/* Header row */}
            <div className="mb-6 flex items-start justify-between">
              {/* Index number */}
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-[40px] font-black leading-none text-border/50 transition-colors duration-500 group-hover:text-primary/15">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Tag badge */}
              <div className="relative">
                <div className="overflow-hidden rounded-full border border-border/50 bg-secondary/30 px-3 py-1 transition-all duration-500 group-hover:border-primary/30 group-hover:bg-primary/10">
                  <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-muted-foreground transition-colors duration-500 group-hover:text-primary">
                    {feature.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* Icon with elaborate container */}
            <div className="mb-5 relative inline-flex self-start">
              {/* Outer ring */}
              <div className="absolute -inset-2 rounded-2xl border border-dashed border-transparent transition-all duration-700 group-hover:border-primary/15 group-hover:rotate-[5deg]" />
              
              {/* Icon box */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary/20 transition-all duration-700 group-hover:border-primary/30 group-hover:bg-primary/[0.08] group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.12),inset_0_0_20px_hsl(var(--primary)/0.05)]">
                <Icon
                  className="h-6 w-6 text-muted-foreground/60 transition-all duration-700 group-hover:text-primary group-hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)]"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Title with underline animation */}
            <div className="mb-3 relative">
              <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary">
                {feature.title}
              </h3>
              <div className="mt-2 h-px w-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent transition-all duration-700 group-hover:w-full" />
            </div>

            {/* Description */}
            <p className="mb-auto text-[13px] leading-[1.7] text-muted-foreground/70 transition-colors duration-500 group-hover:text-muted-foreground/90">
              {feature.description}
            </p>

            {/* Stats footer with animated bar */}
            {feature.stats && (
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <div className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-primary/50" />
                      <div className="absolute h-3 w-3 rounded-full border border-primary/20" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-primary/70 transition-colors duration-500 group-hover:text-primary">
                      {feature.stats}
                    </span>
                  </div>
                  
                  {/* Mini arrow link */}
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border border-border/30 text-muted-foreground/30 transition-all duration-500 group-hover:border-primary/30 group-hover:text-primary group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.15)]">
                    <svg className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
