"use client";

import { useCallback, useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  kind: "dot" | "note";
  noteColor: string;
  phase: number;
};

const MAX_OPACITY = 0.3;
const PRIMARY = "255, 0, 85";
const SECONDARY = "0, 229, 204";

function drawNote(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale: number,
  rgb: string,
  alpha: number,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.beginPath();
  ctx.moveTo(0, 8);
  ctx.quadraticCurveTo(6, 4, 10, 0);
  ctx.lineTo(10, -18);
  ctx.lineTo(6, -16);
  ctx.lineTo(6, -2);
  ctx.quadraticCurveTo(2, 2, 0, 8);
  ctx.closePath();
  ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(-2, 10, 5, 4, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);

  const initParticles = useCallback((w: number, h: number) => {
    const count = Math.min(90, Math.floor((w * h) / 14000));
    const list: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const isNote = Math.random() < 0.22;
      list.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
        kind: isNote ? "note" : "dot",
        noteColor: Math.random() > 0.5 ? PRIMARY : SECONDARY,
        phase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = list;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles(w, h);
    };

    const onMove = (e: MouseEvent) => {
      mouseRef.current.tx = e.clientX;
      mouseRef.current.ty = e.clientY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    const connectDist = Math.min(window.innerWidth, window.innerHeight) * 0.12;

    const tick = (t: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy) || 1;
        const pull = Math.min(42 / d, 0.08);
        p.vx += (dx / d) * pull * 0.02;
        p.vy += (dy / d) * pull * 0.02;
        p.vx *= 0.992;
        p.vy *= 0.992;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.x = Math.max(0, Math.min(w, p.x));
        p.y = Math.max(0, Math.min(h, p.y));
        p.phase += 0.012;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < connectDist) {
            const alpha = (1 - dist / connectDist) * MAX_OPACITY * 0.45;
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        const float = Math.sin(t * 0.001 + p.phase) * 0.15;
        if (p.kind === "dot") {
          const alpha = MAX_OPACITY * (0.55 + float * 0.2);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        } else {
          const alpha = MAX_OPACITY * (0.65 + float * 0.25);
          drawNote(ctx, p.x, p.y, 0.55 + float * 0.05, p.noteColor, alpha);
        }
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  );
}
