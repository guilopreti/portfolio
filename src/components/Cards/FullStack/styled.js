import styled from "styled-components";

export const FullStackCardContainer = styled.li`
  padding: 10px;
  background-color: var(--black-blue);
  color: var(--turquoise);
  border-radius: 20px;
  min-height: ${({ type }) => (type === "front" ? "450px" : "345px")};
  max-width: 400px;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
  border: 5px solid;
  font-size: 14px;
  font-weight: 600;

  .buttons-div {
    margin: 0;
    padding: 0;
    gap: 15px;

    button {
      font-size: 14px;
      padding: 5px;
      height: 35px;
    }

    button:nth-child(1) {
      color: ${(props) =>
        props.type === "front" ? "var(--black-blue)" : "var(--turquoise)"};
      background: ${(props) =>
        props.type === "front" ? "var(--turquoise)" : "var(--black-blue)"};
    }

    button:nth-child(2) {
      color: ${(props) =>
        props.type === "back" ? "var(--black-blue)" : "var(--turquoise)"};
      background: ${(props) =>
        props.type === "back" ? "var(--turquoise)" : "var(--black-blue)"};
    }

    button:hover {
      color: var(--black-blue);
      background: var(--turquoise);
    }
  }

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

  .preview-code-div {
    display: flex;
    gap: 20px;
    margin: 0px;
    padding: 0px;
    width: ${({ type }) => (type === "front" ? "auto" : "100%")};
  }

  a {
    text-decoration: none;
    color: var(--turquoise);
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
