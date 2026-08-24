import { useEffect, useState } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#before-after" },
  { label: "Gallery", href: "#gallery" },
  { label: "Feedback", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open-body");
    } else {
      document.body.classList.remove("menu-open-body");
    }

    return () => {
      document.body.classList.remove("menu-open-body");
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`navbar ${
        isScrolled ? "navbar-scrolled" : ""
      } ${isMenuOpen ? "menu-active" : ""}`}
    >
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleLinkClick}
          aria-label="Eterna Clinic Home"
        >
          <img
            src="/images/eterna-logo.png"
            alt="Éterna Dental and Beauty Clinic"
            className="navbar-logo-image"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`navbar-links ${
            isMenuOpen ? "menu-open" : ""
          }`}
          aria-hidden={!isMenuOpen ? undefined : false}
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

        {/* Desktop appointment */}
        <a
          href="#appointment"
          className="navbar-appointment desktop-appointment"
        >
          Book Appointment
          <span>↗</span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`menu-toggle ${
            isMenuOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
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