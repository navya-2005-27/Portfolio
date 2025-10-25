import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const isClickingRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;

      // Create particles on mouse move
      if (Math.random() > 0.5) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 2 + Math.random() * 2;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          size: 2 + Math.random() * 4,
        });
      }
    };

    const mouseDown = () => {
      isClickingRef.current = true;
      // Create burst of particles on click
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const velocity = 3 + Math.random() * 2;
        particlesRef.current.push({
          x: cursorRef.current.x,
          y: cursorRef.current.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          size: 3 + Math.random() * 5,
        });
      }
    };

    const mouseUp = () => {
      isClickingRef.current = false;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // gravity
        p.life -= 0.02;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        );
        gradient.addColorStop(0, `rgba(0, 212, 255, ${p.life * 0.6})`);
        gradient.addColorStop(1, `rgba(0, 153, 204, ${p.life * 0.2})`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw custom cursor
      const size = isClickingRef.current ? 25 : 20;
      const opacity = isClickingRef.current ? 1 : 0.9;

      // Outer ring
      ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, size, 0, Math.PI * 2);
      ctx.stroke();

      // Inner circle
      ctx.fillStyle = `rgba(0, 212, 255, ${opacity * 0.4})`;
      ctx.beginPath();
      ctx.arc(
        cursorRef.current.x,
        cursorRef.current.y,
        size * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Center dot
      ctx.fillStyle = `rgba(0, 212, 255, ${opacity})`;
      ctx.beginPath();
      ctx.arc(
        cursorRef.current.x,
        cursorRef.current.y,
        size * 0.1,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Cross/plus indicator
      ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.6})`;
      ctx.lineWidth = 1.5;
      const crossSize = size * 0.6;
      ctx.beginPath();
      ctx.moveTo(cursorRef.current.x - crossSize, cursorRef.current.y);
      ctx.lineTo(cursorRef.current.x + crossSize, cursorRef.current.y);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(cursorRef.current.x, cursorRef.current.y - crossSize);
      ctx.lineTo(cursorRef.current.x, cursorRef.current.y + crossSize);
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50"
      />
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
