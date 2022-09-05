import styled from "styled-components";

const TechsContainer = styled.section`
  background-color: var(--turquoise);
  font-family: "Open Sans", sans-serif;
  padding-top: 35px;
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
  }
`;

export default TechsContainer;
