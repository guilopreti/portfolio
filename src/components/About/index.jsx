import AboutContainer from "./styled";

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="grid-background"></div>
      <div className="radial-gradient-overlay"></div>

      <div className="blob-1"></div>
      <div className="blob-2"></div>

      <section className="about-principal-section">
        <section className="image-section">
          <div className="image-container">
            <div className="outer-ring-1"></div>
            <div className="outer-ring-2"></div>

            <div className="inner-circle">
              <div></div>
            </div>

            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-projects-61790.appspot.com/o/Ilustra%20GUI%20vers%C3%A3o%202023.png?alt=media&token=327943c9-15f4-430e-ac93-7daaef819149"
                alt="Guilherme_Lopreti_Ilustração"
              />
              <figcaption>Guilherme Lopreti Imagem</figcaption>
            </figure>
          </div>
        </section>

        <section className="description-section">
          <div className="greeting-div">
            <div></div>
            <span>Olá, eu sou</span>
          </div>

          <div className="title-div">
            <h1>
              Guilherme <span>Lopreti</span>
            </h1>
            <h2>FULLSTACK DEVELOPER</h2>
          </div>

          <p>
            Encantado pela tecnologia desde pequeno, iniciei minha jornada na
            programação em 2021 quando comecei o curso de Desenvolvimento Web
            FullStack da Kenzie Academy Brasil. Neste site deixei registrado
            meus conhecimentos e melhores projetos que desenvolvi até então!
          </p>

          <div className="cta-buttons-div">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Ver Projetos
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Entre em Contato
            </button>
          </div>
        </section>
      </section>

      <button
        className="scroll-button"
        onClick={() =>
          document.getElementById("techs")?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        <span>SCROLL</span>

        <div className="scroll-border">
          <div></div>
        </div>
      </button>
    </AboutContainer>
  );
};

export default About;
