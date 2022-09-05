import styled from "styled-components";

const BackCardContainer = styled.li`
  padding: 10px;
  background-color: var(--black-blue);
  color: var(--turquoise);
  border-radius: 20px;
  min-height: 345px;
  max-width: 400px;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  border: 5px solid;
  font-size: 14px;
  font-weight: 600;
  text-align: justify;

  h4 {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
  }

  .preview-code-div {
    display: flex;
    margin: 0px;
    padding: 0px;
    width: auto;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: var(--turquoise);
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default BackCardContainer;
