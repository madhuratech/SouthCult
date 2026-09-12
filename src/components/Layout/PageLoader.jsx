import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/southcult.svg";


export default function PageLoader() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#050505] transition-opacity duration-700 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Cinematic shutters */}
      <div className={`shutter top ${visible ? "open" : ""}`} />
      <div className={`shutter bottom ${visible ? "open" : ""}`} />

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={Logo}
          alt="South Cult"
          className={`w-32 md:w-40 transition-all duration-1000 ${
            visible
              ? "scale-100 opacity-100"
              : "scale-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}