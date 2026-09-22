import { Link } from "react-router-dom";
import Logo from "../../assets/southcult.svg";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl justify-center px-6 pt-8 md:px-10 md:pt-10">
        <Link to="/" aria-label="South Cult Home">
          <img
            src={Logo}
            alt="South Cult Logo"
            className="h-14 w-auto md:h-20"
          />
        </Link>
      </div>
    </nav>
  );
}