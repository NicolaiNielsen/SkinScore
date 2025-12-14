import ReactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <div className="bg-slate-600 w-full flex items-center justify-between px-6 py-6">
      {/* Logo */}
      <img src={ReactLogo} alt="React Logo" className="h-10 w-10" />

      {/* Links */}
      <ul className=" flex space-x-5 text-white">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
