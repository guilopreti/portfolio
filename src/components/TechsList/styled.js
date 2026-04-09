import styled from "styled-components";

const TechsContainer = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  position: relative;
  background: #0a0e1a;

  .top-border-div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 229, 212, 0.2),
      transparent
    );
  }

  .techs-content-div {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .techs-header-div {
    text-align: center;
    margin-bottom: 4rem;

    > span:nth-child(1) {
      color: #00e5d4;
      font-size: 0.75rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      font-family: "Inter", sans-serif;
      margin-bottom: 1rem;
      display: block;
    }

    h2 {
      color: white;
      font-family: "Space Grotesk", sans-serif;
      margin-bottom: 1rem; /* mb-4 */
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;

      span {
        background: linear-gradient(135deg, #00e5d4, #7c3aed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.4);
      font-family: "Inter", sans-serif;
      max-width: 32rem;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }
  }

  .tech-category-list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  @media (min-width: 700px) {
    h2 {
      text-align: center;
    }
  }

  @media (min-width: 800px) {
    h2 {
      font-size: 30px;
    }
  }

  @media (min-width: 1222px) {
    h2 {
      font-size: 40px;
    }
  }
`;

export default TechsContainer;
