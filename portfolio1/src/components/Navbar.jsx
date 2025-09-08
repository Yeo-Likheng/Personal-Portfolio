import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "Home", title: "Home" },
    { id: "about", title: "About" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggle &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  return (
    <>
      <nav
        className={`px-6 w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#a38163] backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <a
            href="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-[#26221f] text-[18px] font-bold cursor-pointer flex">
              Yeo &nbsp;
              <span className="sm:block hidden"> Likheng</span>
            </p>
          </a>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "border-b-[#654b35] border-b-2 border-[#d4b98c]" 
                    : "text-black" 
                } hover:text-[#d4b98c] text-[18px] font-medium cursor-pointer transition-colors duration-200`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex items-center">
            <button
              className="menu-button p-2 text-[#26221f] hover:text-[#d4b98c] transition-colors duration-200"
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle menu"
            >
              {toggle ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden transition-opacity duration-300 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setToggle(false)}
      />
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-[#f9f6f1] z-50 sm:hidden transform transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-[#d4b98c]">
          <p className="text-[#26221f] text-lg font-bold">Menu</p>
          <button
            className="p-2 text-[#26221f] hover:text-[#d4b98c] transition-colors duration-200"
            onClick={() => setToggle(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <ul className="list-none flex flex-col gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title
                    ? "text-[#654b35] border-l-2 border-[#d4b98c] pl-4"
                    : "text-black"
                } hover:text-[#d4b98c] hover:border-l-2 hover:border-[#654b35] hover:pl-4 text-lg font-medium cursor-pointer transition-all duration-200`}
                onClick={() => {
                  setToggle(false);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`} className="block py-2">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
