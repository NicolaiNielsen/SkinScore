import Logo from "../assets/mask.png";

function Footer() {
  return (
    <footer className="bg-[#DBE2EF] w-full flex flex-col items-center py-4 text-[#3F72AF] mt-auto">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-2">
        <img src={Logo} alt="Logo" className="w-8" />
        <span className="font-sans font-bold text-xl">Maomao</span>
      </div>

      {/* Links */}
      <div className="flex space-x-4 mb-2">
        <a href="#" className="text-sm font-sans hover:underline">
          Home
        </a>
        <a
          href="https://www.linkedin.com/in/nicolai-aphichat-nielsen-1335832ba/"
          className="text-sm font-sans hover:underline"
        >
          Linkedin
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs font-sans">&copy; 2025 Maomao</p>
    </footer>
  );
}

export default Footer;
