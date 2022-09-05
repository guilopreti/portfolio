import FrontCardContainer from "./styled";

const FrontCard = () => {
  return (
    <FrontCardContainer>
      <h4>Kenzie Shop ContextAPI</h4>
      <figure>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-projects-61790.appspot.com/o/KZShop-C.png?alt=media&token=c341e572-fe02-4c2c-a05e-a5f9377358a5"
          alt=""
        />
        <figcaption>Kenzie Shop Music</figcaption>
      </figure>
      <p>
        O Kenzie Shop Music é um site que simula um e-commerce de instrumentos
        musicais, com sistema de carrinho de compras.
      </p>
      <p>
        Tecnologias: JavaScript, React, styled-components, ContextAPI,
        React-router-dom
      </p>
      <div>
        <a href="">Aplicação</a>
        <a href="">Código</a>
      </div>
    </FrontCardContainer>
  );
};

export default FrontCard;
