import { useEffect, useRef } from "react";

const HexGridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const drawHex = (cx, cy, r, alpha) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 220, 255, ${alpha})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const animate = () => {
      time += 0.005;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const hexSize = 45;
      const hexH = hexSize * Math.sqrt(3);
      const cols = Math.ceil(w / (hexSize * 1.5)) + 2;
      const rows = Math.ceil(h / hexH) + 2;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * hexSize * 1.5;
          const y = row * hexH + (col % 2 === 1 ? hexH / 2 : 0);
          const dist = Math.sqrt((x - w / 2) ** 2 + (y - h / 2) ** 2);
          const wave = Math.sin(dist * 0.005 - time * 2) * 0.5 + 0.5;
          const alpha = wave * 0.08 + 0.02;
          drawHex(x, y, hexSize, alpha);
        }
      }

      // Draw pulsing nodes at some hex centers
      for (let row = 0; row < rows; row += 3) {
        for (let col = 0; col < cols; col += 4) {
          const x = col * hexSize * 1.5;
          const y = row * hexH + (col % 2 === 1 ? hexH / 2 : 0);
          const pulse = Math.sin(time * 3 + col + row) * 0.5 + 0.5;
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 220, 255, ${pulse * 0.5})`;
          ctx.fill();
        }
      }

      // Draw connecting lines between random nodes
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const progress = ((time * 0.3 + i * 0.12) % 1);
        const startX = (i * 170 + 50) % w;
        const startY = Math.sin(i * 2.5) * h * 0.3 + h * 0.5;
        const endX = ((i + 3) * 190 + 100) % w;
        const endY = Math.cos(i * 1.8) * h * 0.3 + h * 0.5;
        
        const cx = startX + (endX - startX) * progress;
        const cy = startY + (endY - startY) * progress;
        
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, 1.5, 0, Math.PI * 2);
      }
      ctx.fillStyle = "rgba(0, 220, 255, 0.6)";
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ opacity: 0.6 }}
    />
  );
};

export default HexGridBackground;
