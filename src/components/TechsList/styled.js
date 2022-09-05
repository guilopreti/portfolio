import styled from "styled-components";

const TechsContainer = styled.section`
  background-color: var(--turquoise);
  font-family: "Open Sans", sans-serif;
  padding-top: 100px;
  padding-left: 15px;

  h2 {
    font-family: "Open Sans", sans-serif;
    color: var(--white-fixed);
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
  }

  ul {
    width: 100%;
    display: -webkit-inline-box;
    white-space: nowrap;
    overflow-x: scroll;
    margin-bottom: 45px;
    gap: 30px;
    padding-bottom: 10px;
    padding-right: 15px;
  }

  ul::-webkit-scrollbar {
    height: 15px;
  }

  ul::-webkit-scrollbar-track {
    background-color: var(--turquoise);
    border-radius: 4px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--black-blue);
    border-radius: 20px;
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
