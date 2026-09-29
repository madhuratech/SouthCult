import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../../assets/southcult.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed z-50
        transition-all duration-500 ease-in-out bg-black

        ${
          scrolled
            ? "top-4 left-4 sm:top-6 sm:left-6 translate-x-0"
            : "top-4 left-1/2 -translate-x-1/2"
        }
      `}
    >
      <Link
        to="/"
        aria-label="South Cult"
        className={`
          block
          transition-all duration-500

          ${
            scrolled
              ? "px-2 py-1 sm:px-4 sm:py-2"
              : "px-3 py-2 sm:px-6 sm:py-3"
          }
        `}
      >
        <img
          src={Logo}
          alt="South Cult Logo"
          className={`
            w-auto
            transition-all duration-500

            ${
              scrolled
                ? "h-12 sm:h-16"
                : "h-14 sm:h-20"
            }
          `}
        />
      </Link>
    </nav>
  );
}