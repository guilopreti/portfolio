import { HeaderContainer, DesktopNav, NavItem } from "./styled";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["about", "techs", "experience", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setActiveSection(id);
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    {
      id: "about",
      label: "Sobre",
    },
    {
      id: "techs",
      label: "Tecnologias",
    },
    {
      id: "experience",
      label: "Experiência",
    },
    {
      id: "projects",
      label: "Projetos",
    },
    {
      id: "contact",
      label: "Contato",
    },
  ];

  return (
    <HeaderContainer $open={menuOpen} $scrolled={scrolled}>
      <section>
        <div className="social-links-div">
          <a
            href="https://www.linkedin.com/in/guilherme-lopreti-silva/"
            target={"_blank"}
            rel="noreferrer"
            className="linkedin-link"
          >
            <GrLinkedinOption fill="#00e5d4" />
          </a>
          <a
            href="https://github.com/guilopreti"
            target={"_blank"}
            rel="noreferrer"
            className="github-link"
          >
            <BsGithub fill="#00e5d4" />
          </a>
        </div>

        <div
          className="logo-name-div"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00e5d4" />
                <stop offset="50%" stopColor="#00bcd4" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="46" fill="rgba(0, 229, 212, 0.05)" />
            <circle className="dashed-ring" cx="50" cy="50" r="46" stroke="#00e5d4" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 4" />
            
            <text x="35" y="54" fill="#ffffff" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="48" letterSpacing="-0.02em" textAnchor="middle" dominantBaseline="middle">G</text>
            <text x="67" y="54" fill="url(#logo-gradient)" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="48" letterSpacing="-0.02em" textAnchor="middle" dominantBaseline="middle">L</text>
          </svg>
        </div>

        <DesktopNav>
          {navLinks.map((link) => (
            <NavItem
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              $active={activeSection === link.id}
            >
              {link.label}
              <span className="active-line" />
              <span className="hover-line" />
            </NavItem>
          ))}
        </DesktopNav>

        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </section>

      {menuOpen && (
        <nav className="mobile-nav">
          <a href="#about" onClick={() => setMenuOpen(!menuOpen)}>
            Sobre
          </a>
          <a href="#techs" onClick={() => setMenuOpen(!menuOpen)}>
            Tecnologias
          </a>
          <a href="#experience" onClick={() => setMenuOpen(!menuOpen)}>
            Experiência
          </a>
          <a href="#projects" onClick={() => setMenuOpen(!menuOpen)}>
            Projetos
          </a>
          <a href="#contact" onClick={() => setMenuOpen(!menuOpen)}>
            Contato
          </a>
        </nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
