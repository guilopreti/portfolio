import styled from "styled-components";

const AboutContainer = styled.section`
  background-color: var(--black-blue);
  color: var(--white-fixed);
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 50px;
  padding-top: 75px;

  figure {
    margin: 55px 0px 30px;

    img {
      width: 197px;
      height: 197px;
      border-radius: 50%;
    }

    figcaption {
      display: none;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    gap: 10px;
  }

  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
    font-style: italic;
    font-size: 30px;
  }

  h3 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 21px;
  }

  p {
    font-weight: 400;
    width: 90%;
    text-align: justify;
    font-size: 16px;
    max-width: 750px;
  }

  @media (min-width: 700px) {
    .about-principal-section {
      flex-direction: row;
      width: 90%;
      justify-content: space-around;
      margin: 88px 0px 70px;
    }
  }

  @media (min-width: 780px) {
    figure {
      img {
        width: 287px;
        height: 287px;
      }
    }
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 43px;
    }

    h3 {
      font-size: 30px;
    }
  }

  @media (min-width: 1222px) {
    .about-principal-section {
      justify-content: center;
      gap: 110px;
    }
    h1 {
      font-size: 70px;
    }

    h3 {
      font-size: 40px;
    }
    p {
      font-size: 24px;
    }
  }
`;

export default AboutContainer;
