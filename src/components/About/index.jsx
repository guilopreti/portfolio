import AboutContainer from "./styled";

const About = () => {
  return (
    <AboutContainer>
      <section className="about-principal-section">
        <figure>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-projects-61790.appspot.com/o/Ilustra_GUI_TESTE_01.png?alt=media&token=7730b3e3-9164-4bcb-8e58-891fd5b2aaa5"
            alt="Guilherme_Lopreti_Imagem"
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
            meus conhecimentos e prejetos que desenvolvi até então!
          </p>
        </section>
      </section>
    </AboutContainer>
  );
};

export default About;
