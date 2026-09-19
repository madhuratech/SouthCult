import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/southcult.svg";

export default function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        @keyframes logoZoom {
          from {
            transform: scale(0.8);
          }
          to {
            transform: scale(1.4);
          }
        }
      `}</style>

      <div
        className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]
          transition-opacity duration-500 ease-linear
          ${
            isLoading
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Top shutter */}
        <div
          className={`absolute top-0 left-0 h-1/2 w-full bg-[#050505]
            transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]
            ${isLoading ? "translate-y-0" : "-translate-y-full"}`}
        />

        {/* Bottom shutter */}
        <div
          className={`absolute bottom-0 left-0 h-1/2 w-full bg-[#050505]
            transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]
            ${isLoading ? "translate-y-0" : "translate-y-full"}`}
        />

        {/* Logo */}
        <div className="relative z-10 overflow-visible">
          <img
            src={Logo}
            alt="South Cult"
            className="w-32 md:w-40"
            style={{
              animation: isLoading
                ? "logoZoom 1s linear forwards"
                : "none",
              opacity: isLoading ? 1 : 0,
              transition: "opacity 250ms ease",
            }}
          />
        </div>
      </div>
    </>
  );
}