import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/southcult.svg";

export default function PageLoader() {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Start loader whenever route changes
    setIsLoading(true);

    // Small delay so the transition feels intentional
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]
        transition-opacity duration-700 ease-in-out
        ${isLoading ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
      `}
    >
      {/* Top shutter */}
      <div
        className={`absolute left-0 top-0 h-1/2 w-full bg-[#050505]
          transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]
          ${isLoading ? "translate-y-0" : "-translate-y-full"}
        `}
      />

      {/* Bottom shutter */}
      <div
        className={`absolute bottom-0 left-0 h-1/2 w-full bg-[#050505]
          transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]
          ${isLoading ? "translate-y-0" : "translate-y-full"}
        `}
      />

      {/* Logo */}
      <div
        className={`relative z-10 transition-all duration-700 ease-out
          ${
            isLoading
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0"
          }
        `}
      >
        <img
          src={Logo}
          alt="South Cult"
          className="w-32 md:w-40"
        />
      </div>
    </div>
  );
}