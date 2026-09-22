import { useEffect, useRef } from "react";

export default function SmoothCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { ...pos };

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let raf;

    const animate = () => {
      // smoother follow
      pos.x += (mouse.x - pos.x) * 0.08;
      pos.y += (mouse.y - pos.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-7 w-7 rounded-full"
      style={{
        willChange: "transform",
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.95) 1px, transparent 1.2px)",
        backgroundSize: "4px 4px",
        backgroundPosition: "center",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow:
          "0 0 18px rgba(255,255,255,0.12), inset 0 0 12px rgba(255,255,255,0.06)",
        backdropFilter: "blur(2px)",
      }}
    />
  );
}