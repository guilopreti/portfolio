import Form from "../Form";
import ContactContainer from "./styled";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div className="contact-divider"></div>

      <div className="contact-blob-right"></div>
      <div className="contact-blob-left"></div>

      <div className="contact-section-content">
        <div className="contact-header">
          <span>Vamos conversar</span>
          <h2>
            Entre em <span>Contato</span>
          </h2>
          <p>
            Tem um projeto em mente? Adoraria ouvir sobre ele. Me envie uma
            mensagem!
          </p>
        </div>

        <div className="contact-infos">
          <div className="contact-infos-left">
            <div>
              <h3>Informações de Contato</h3>
              <p>
                Estou sempre aberto a novas oportunidades e colaborações. Não
                hesite em entrar em contato!
              </p>
            </div>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/guilherme-lopreti-silva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-links-icon">
                  <FiLinkedin size={18} />
                </div>

                <div className="contact-links-text">
                  <p>LinkedIn</p>
                  <p>guilherme-lopreti-silva</p>
                </div>
              </a>

              <a
                href="https://github.com/guilopreti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-links-icon">
                  <FiGithub size={18} />
                </div>

                <div className="contact-links-text">
                  <p>GitHub</p>
                  <p>guilopreti</p>
                </div>
              </a>
            </div>

            <div className="contact-snippet-box">
              <div className="contact-snippet-dots">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="contact-snippet-code">
                <span
                  style={{
                    color: "#c084fc",
                  }}
                >
                  const
                </span>{" "}
                <span
                  style={{
                    color: "#93c5fd",
                  }}
                >
                  developer
                </span>{" "}
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  =
                </span>{" "}
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {"{"}
                </span>
                <br />
                <span
                  style={{
                    marginLeft: "1rem",
                    color: "#86efac",
                  }}
                >
                  name
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  :
                </span>{" "}
                <span
                  style={{
                    color: "#fde047",
                  }}
                >
                  "Guilherme"
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  ,
                </span>
                <br />
                <span
                  style={{
                    marginLeft: "1rem",
                    color: "#86efac",
                  }}
                >
                  role
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  :
                </span>{" "}
                <span
                  style={{
                    color: "#fde047",
                  }}
                >
                  "Fullstack Dev"
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  ,
                </span>
                <br />
                <span
                  style={{
                    marginLeft: "1rem",
                    color: "#86efac",
                  }}
                >
                  openTo
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  :
                </span>{" "}
                <span
                  style={{
                    color: "#00e5d4",
                  }}
                >
                  true
                </span>
                <br />
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {"}"}
                </span>
              </div>
            </div>
          </div>

          <div className="contact-infos-right">
            <Form />
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
