import { useEffect, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#before-after" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        <a
          href="#home"
          className="navbar-logo"
          onClick={handleLinkClick}
        >
          <span className="logo-main">ETERNA</span>
          <span className="logo-sub">CLINIC</span>
        </a>

        <nav
          className={`navbar-links ${
            isMenuOpen ? "menu-open" : ""
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#appointment"
            className="navbar-appointment mobile-appointment"
            onClick={handleLinkClick}
          >
            Book Appointment
          </a>
        </nav>

        <a
          href="#appointment"
          className="navbar-appointment desktop-appointment"
        >
          Book Appointment
          <span>↗</span>
        </a>

        <button
          className={`menu-toggle ${
            isMenuOpen ? "active" : ""
          }`}
          onClick={() =>
            setIsMenuOpen((prev) => !prev)
          }
          aria-label={
            isMenuOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;