import styled from "styled-components";

const FrontCardContainer = styled.li`
  padding: 10px;
  background-color: var(--black-blue);
  color: var(--turquoise);
  border-radius: 20px;
  min-height: 450px;
  max-width: 400px;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  border: 5px solid;
  font-size: 14px;

  h4 {
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
  }

  figure {
    border-radius: 10px;
    width: 100%;

    img {
      width: 100%;
      height: 190px;
      border-radius: 10px;
      border: 5px solid;
    }

    figcaption {
      display: none;
    }
  }

  div {
    display: flex;
    gap: 20px;
    margin: 0px;
    padding: 0px;
  }

  a {
    text-decoration: none;
    color: var(--turquoise);
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default FrontCardContainer;
