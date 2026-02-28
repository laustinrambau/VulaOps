import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ThreatMap = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [size, setSize] = useState(500); // initial square size

  const nodes = [
    { x: 0.08, y: 0.3, targetX: 0.5, targetY: 0.5, type: "source", label: "APT-29", active: true },
    { x: 0.15, y: 0.7, targetX: 0.5, targetY: 0.5, type: "source", label: "APT-41", active: true },
    { x: 0.22, y: 0.15, targetX: 0.35, targetY: 0.4, type: "source", label: "FIN7", active: false },
    { x: 0.35, y: 0.4, targetX: 0.5, targetY: 0.5, type: "relay", label: "C2-NODE", active: true },
    { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5, type: "target", label: "NEXUS", active: true },
    { x: 0.65, y: 0.35, targetX: 0.5, targetY: 0.5, type: "relay", label: "PROXY-7", active: true },
    { x: 0.78, y: 0.65, targetX: 0.65, targetY: 0.35, type: "source", label: "LAZARUS", active: true },
    { x: 0.88, y: 0.2, targetX: 0.65, targetY: 0.35, type: "source", label: "SANDWORM", active: false },
    { x: 0.92, y: 0.75, targetX: 0.65, targetY: 0.35, type: "source", label: "APT-38", active: true },
  ];

  // Update square size based on container width
  useEffect(() => {
    const resize = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setSize(w); // perfect square: width = height
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    let time = 0;
    let animId;

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, size, size);

      const w = size;
      const h = size;

      // Draw connections
      nodes.forEach((node) => {
        if (node.type === "target") return;
        const sx = node.x * w;
        const sy = node.y * h;
        const tx = node.targetX * w;
        const ty = node.targetY * h;

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = node.active
          ? "rgba(0, 220, 255, 0.12)"
          : "rgba(0, 220, 255, 0.04)";
        ctx.lineWidth = 1;
        ctx.stroke();

        if (node.active) {
          const speed = 0.3 + Math.sin(node.x * 10) * 0.15;
          const progress = (time * speed + node.x * 3) % 1;
          const px = sx + (tx - sx) * progress;
          const py = sy + (ty - sy) * progress;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 220, 255, 0.8)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
          grd.addColorStop(0, "rgba(0, 220, 255, 0.3)");
          grd.addColorStop(1, "rgba(0, 220, 255, 0)");
          ctx.fillStyle = grd;
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;

        const radius =
          node.type === "target" ? 6 :
          node.type === "relay" ? 4 : 3;

        const pulse = Math.sin(time * 3 + node.x * 5) * 0.3 + 0.7;

        if (node.active) {
          ctx.beginPath();
          ctx.arc(nx, ny, radius * 3, 0, Math.PI * 2);
          const grd = ctx.createRadialGradient(nx, ny, 0, nx, ny, radius * 3);
          const color = node.type === "source" ? "255, 80, 80" : "0, 220, 255";
          grd.addColorStop(0, `rgba(${color}, ${0.15 * pulse})`);
          grd.addColorStop(1, `rgba(${color}, 0)`);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(nx, ny, radius, 0, Math.PI * 2);

        if (node.type === "source") {
          ctx.fillStyle = node.active
            ? `rgba(255, 80, 80, ${pulse})`
            : "rgba(255, 80, 80, 0.3)";
        } else if (node.type === "target") {
          ctx.fillStyle = `rgba(0, 220, 255, ${pulse})`;
        } else {
          ctx.fillStyle = `rgba(0, 220, 255, ${0.6 * pulse})`;
        }

        ctx.fill();

        ctx.font = "9px monospace";
        ctx.fillStyle = node.active
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(255, 255, 255, 0.2)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, nx, ny - radius - 6);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-lg overflow-hidden rounded-xl border border-border bg-slate-500"
      style={{ aspectRatio: "1 / 1" }} // perfect square
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
    </motion.div>
  );
};

export default ThreatMap;