import Logo from "../assets/mask.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#DBE2EF] shadow-md w-full flex items-center justify-between px-10 py-5 text-[#3F72AF]">
      {/* Logo */}
      <Link to="/" className="flex flex-row items-center space-x-3">
        <img src={Logo} alt="Logo" className="w-16" />
        <span className="font-sans font-bold text-4xl shadow-sm">Maomao</span>
      </Link>

      {/* Links */}
      <ul className="flex space-x-5">
        <li>
          <Link to="/" className="text-xl font-bold font-sans shadow-sm">
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/recommendations"
            className="text-xl font-bold font-sans shadow-sm"
          >
            Recommendations
          </Link>
        </li>

        <li>
          <Link
            to="https://www.linkedin.com/in/nicolai-aphichat-nielsen-1335832ba/"
            className="text-xl font-bold font-sans shadow-sm"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
