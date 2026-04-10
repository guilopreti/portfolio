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
          <span>GL</span>
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
