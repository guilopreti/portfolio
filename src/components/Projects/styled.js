import styled from "styled-components";

const ProjectsContainer = styled.section`
  background-color: var(--black-blue);
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
