import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: var(--turquoise);
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  div {
    display: flex;
    gap: 15px;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 20px;
    }
  }

  .linkedin-link {
    background-color: var(--black-blue);

    svg {
      color: var(--turquoise);
      width: 60%;
      height: 60%;
    }
  }

  .github-link {
    background-color: var(--turquoise);

    svg {
      color: var(--black-blue);
      width: 100%;
      height: 100%;
    }
  }
`;

export default HeaderContainer;
