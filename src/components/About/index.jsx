import AboutContainer from "./styled";

const About = () => {
  return (
    <AboutContainer>
      <section className="about-principal-section">
        <figure>
          <img
            src="https://images.tcdn.com.br/img/img_prod/817885/papel_scrapbook_cores_claras_cinza_milano_180g_color_plus_687_1_20200713031939.jpg"
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
