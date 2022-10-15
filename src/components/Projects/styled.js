import styled from "styled-components";

const ProjectsContainer = styled.section`
  min-height: 665px;
  color: var(--white-fixed);
  font-family: "Open Sans", sans-serif;
  padding-top: 75px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    font-family: "Open Sans", sans-serif;
    color: var(--white-fixed);
    font-weight: 700;
    font-size: 22px;
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    width: 100%;
    margin-bottom: 45px;
    padding: 0px 10px;
    justify-content: center;
  }

  .buttons-div {
    display: flex;
    gap: 20px;
  }

  button {
    border: 4px solid var(--white-fixed);
    padding: 8px;
    border-radius: 16px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
  }

  button:hover {
    color: var(--black-blue);
    background: var(--turquoise);
    filter: brightness(0.9);
  }

  .button-front {
    color: ${(props) =>
      props.projects === "front" ? "var(--black-blue)" : "var(--turquoise)"};
    background: ${(props) =>
      props.projects === "front" ? "var(--turquoise)" : "var(--black-blue)"};
  }

  .button-back {
    color: ${(props) =>
      props.projects === "back" ? "var(--black-blue)" : "var(--turquoise)"};
    background: ${(props) =>
      props.projects === "back" ? "var(--turquoise)" : "var(--black-blue)"};
  }

  .button-fullstack {
    color: ${(props) =>
      props.projects === "fullstack"
        ? "var(--black-blue)"
        : "var(--turquoise)"};
    background: ${(props) =>
      props.projects === "fullstack"
        ? "var(--turquoise)"
        : "var(--black-blue)"};
  }

  .loading-div {
    padding: 0px;
    margin: 0px;
    animation: is-rotating 1s infinite;
    border: 6px solid var(--black-blue);
    border-radius: 50%;
    border-top-color: var(--turquoise);
    height: 50px;
    width: 50px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  ul {
    width: 100%;
    display: -webkit-inline-box;
    overflow-x: scroll;
    gap: 30px;
    padding: 5px 5px;
  }

  ul::-webkit-scrollbar {
    height: 15px;
  }

  ul::-webkit-scrollbar-track {
    background-color: var(--black-blue);
    border-radius: 4px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--turquoise);
    border-radius: 20px;
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

export default ProjectsContainer;
