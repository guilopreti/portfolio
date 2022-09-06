import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 60px;
  border-top: 4px solid var(--white-fixed);
  color: var(--turquoise);
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    color: var(--black-blue);
    background-color: var(--turquoise);
    border: navajowhite;
    padding: 7px;
    border-radius: 100%;
    cursor: pointer;
  }

  svg {
    width: 23px;
    height: 23px;
  }
`;

export default FooterContainer;
