import AboutContainer from "./styled";

const About = () => {
  return (
    <AboutContainer>
      <section className="about-principal-section">
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-projects-61790.appspot.com/o/Gui_logo_borda.png?alt=media&token=a43bc560-83f7-4b03-9b7f-1999a6eb7d78"
            alt="Guilherme_Lopreti_Ilustração"
          />
          <figcaption>Guilherme Lopreti Imagem</figcaption>
        </figure>

        <section>
          <div>
            <h1>GUILHERME LOPRETI</h1>
            <h3>FULLSTACK DEVELOPER</h3>
          </div>

          <p>
            Encantado pela tecnologia desde pequeno, iniciei minha jornada na
            programação em 2021 quando comecei o curso de Desenvolvimento Web
            FullStack da Kenzie Academy Brasil. Neste site deixei registrado
            meus conhecimentos e projetos que desenvolvi até então!
          </p>
        </section>
      </section>
    </AboutContainer>
  );
};

export default About;
