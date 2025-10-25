import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const isClickingRef = useRef(false);
  const isHoveringRef = useRef(false);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;

      // Check if hovering over interactive element
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive =
        target?.tagName === "A" ||
        target?.tagName === "BUTTON" ||
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("[role='button']");

      isHoveringRef.current = !!isInteractive;

      // Create particles on mouse move
      if (Math.random() > 0.6) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 1.5 + Math.random() * 2.5;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          size: 1.5 + Math.random() * 3,
          hue: Math.random() * 60,
        });
      }
    };

    const mouseDown = () => {
      isClickingRef.current = true;
      // Create burst of particles on click
      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2;
        const velocity = 4 + Math.random() * 3;
        particlesRef.current.push({
          x: cursorRef.current.x,
          y: cursorRef.current.y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          size: 2 + Math.random() * 6,
          hue: Math.random() * 60,
        });
      }
    };

    const mouseUp = () => {
      isClickingRef.current = false;
    };

    const animate = () => {
      timeRef.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];

        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // gravity
        p.life -= 0.018;

        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
          continue;
        }

        // Draw particle with glow
        const opacity = p.life * 0.8;
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size * 2
        );
        gradient.addColorStop(
          0,
          `hsla(186, 100%, 50%, ${opacity * 0.8})`
        );
        gradient.addColorStop(
          1,
          `hsla(200, 60%, 45%, ${opacity * 0.1})`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw custom cursor with enhanced design
      const baseSize = 18;
      const size = isClickingRef.current ? baseSize * 1.4 : baseSize;
      const hoverSize = isHoveringRef.current ? baseSize * 1.2 : baseSize;
      const finalSize = Math.max(size, hoverSize);
      const opacity = isClickingRef.current ? 1 : 0.85;

      // Outer rotating ring
      ctx.save();
      ctx.translate(cursorRef.current.x, cursorRef.current.y);
      ctx.rotate((timeRef.current * 0.015) % (Math.PI * 2));

      ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.4})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, finalSize * 1.3, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();

      // Main outer ring
      ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cursorRef.current.x, cursorRef.current.y, finalSize, 0, Math.PI * 2);
      ctx.stroke();

      // Inner glowing circle
      const innerGradient = ctx.createRadialGradient(
        cursorRef.current.x,
        cursorRef.current.y,
        0,
        cursorRef.current.x,
        cursorRef.current.y,
        finalSize
      );
      innerGradient.addColorStop(0, `rgba(0, 212, 255, ${opacity * 0.5})`);
      innerGradient.addColorStop(1, `rgba(0, 153, 204, ${opacity * 0.1})`);

      ctx.fillStyle = innerGradient;
      ctx.beginPath();
      ctx.arc(
        cursorRef.current.x,
        cursorRef.current.y,
        finalSize * 0.35,
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
        finalSize * 0.12,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Enhanced cross indicator - animated
      ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * (0.5 + 0.3 * Math.sin(timeRef.current * 0.05))})`;
      ctx.lineWidth = 1.8;
      const crossSize = finalSize * (0.65 + 0.1 * Math.sin(timeRef.current * 0.03));

      // Horizontal line
      ctx.beginPath();
      ctx.moveTo(cursorRef.current.x - crossSize, cursorRef.current.y);
      ctx.lineTo(cursorRef.current.x + crossSize, cursorRef.current.y);
      ctx.stroke();

      // Vertical line
      ctx.beginPath();
      ctx.moveTo(cursorRef.current.x, cursorRef.current.y - crossSize);
      ctx.lineTo(cursorRef.current.x, cursorRef.current.y + crossSize);
      ctx.stroke();

      // Diagonal accents when hovering over interactive elements
      if (isHoveringRef.current) {
        ctx.strokeStyle = `rgba(0, 153, 204, ${opacity * 0.6})`;
        ctx.lineWidth = 1.2;
        const diagSize = finalSize * 0.5;

        ctx.beginPath();
        ctx.moveTo(
          cursorRef.current.x - diagSize * 0.7,
          cursorRef.current.y - diagSize * 0.7
        );
        ctx.lineTo(
          cursorRef.current.x + diagSize * 0.7,
          cursorRef.current.y + diagSize * 0.7
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(
          cursorRef.current.x + diagSize * 0.7,
          cursorRef.current.y - diagSize * 0.7
        );
        ctx.lineTo(
          cursorRef.current.x - diagSize * 0.7,
          cursorRef.current.y + diagSize * 0.7
        );
        ctx.stroke();
      }

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

        body {
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }
      `}</style>
    </>
  );
}
