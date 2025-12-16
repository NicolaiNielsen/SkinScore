import Logo from "../assets/mask.png";

function Navbar() {
  return (
    <div className="bg-[#DBE2EF] shadow-md w-full flex items-center justify-between px-10 py-5 text-[#3F72AF]">
      {/* Logo */}
      <div className="flex flex-row items-center space-x-3">
        <img src={Logo} alt="React Logo" className="w-16" />
        <span className="font-sans font-bold text-4xl shadow-sm">Maomao</span>
      </div>
      {/* Links */}
      <ul className="flex space-x-5 ">
        <li>
          <a className="text-xl font-bold font-sans shadow-sm" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-xl font-bold font-sans shadow-sm" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
