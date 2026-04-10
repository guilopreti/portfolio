import FooterContainer from "./styled";
import { GrLinkedinOption } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  const sections = [
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
    <FooterContainer>
      <section>
        <div className="footer-top">
          <div className="footer-brand-div">
            <span>Guilherme Lopreti</span>
            <span>Fullstack Developer</span>
          </div>

          <div className="footer-nav-div">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="footer-links-div">
            <a
              href="https://www.linkedin.com/in/guilherme-lopreti-silva/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <GrLinkedinOption size={20} />
            </a>

            <a
              href="https://github.com/guilopreti"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <BsGithub size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p> © {year} Guilherme Lopreti. Todos os direitos reservados.</p>
        </div>
      </section>
    </FooterContainer>
  );
};

export default Footer;
