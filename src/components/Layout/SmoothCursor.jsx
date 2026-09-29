import { useEffect, useRef, useState } from "react";

export default function SmoothCursor() {
  const cursorRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      const touch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0;

      setIsTouchDevice(touch);
    };

    checkDevice();
  }, []);

  useEffect(() => {
    // Never run custom cursor on touch devices
    if (isTouchDevice) return;

    const pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const mouse = { ...pos };

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const hide = () => setHidden(true);
    const show = () => setHidden(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("cursor-hide", hide);
    window.addEventListener("cursor-show", show);

    let raf;

    const animate = () => {
      pos.x += (mouse.x - pos.x) * 0.12;
      pos.y += (mouse.y - pos.y) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor-hide", hide);
      window.removeEventListener("cursor-show", show);
      cancelAnimationFrame(raf);
    };
  }, [isTouchDevice]);

  // Don't render anything on mobile/touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-18 w-18 rounded-full transition-opacity duration-150"
      style={{
        background: "#fff",
        mixBlendMode: "difference",
        willChange: "transform",
        opacity: hidden ? 0 : 1,
      }}
    />
  );
}