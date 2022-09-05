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

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 90%;
    margin-bottom: 30px;
  }
`;

export default ProjectsContainer;
