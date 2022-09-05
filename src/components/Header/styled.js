import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: var(--turquoise);
  font-family: "Open Sans", sans-serif;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  position: fixed;
  width: 100%;
  border-bottom: 2px solid var(--white-fixed);

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1415px;
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

  nav {
    div {
      display: flex;
      position: absolute;
      top: 75px;
      right: 0px;
      width: 100%;
      height: 0px;
      flex-direction: column;
      gap: 0px;
      background-color: var(--turquoise);
      border-bottom: 2px solid var(--white-fixed);
      transition: 0.6s;
      opacity: 0;
      overflow-y: hidden;

      a {
        height: 59px;
        width: 100%;
        border-radius: 0px;
        display: flex;
        justify-content: start;
        padding-left: 15px;
        text-decoration: none;
        color: var(--black-blue);
      }

      svg {
        margin-right: 12px;
      }

      a:hover {
        color: var(--white-fixed);
        background-color: var(--black-blue);
      }
    }
  }

  .active div {
    opacity: 1;
    height: 238px;
  }

  button {
    background: none;
    color: var(--black-blue);
    border: none;
    cursor: pointer;
    border-top: 3px solid;
    width: 25px;
  }

  button::after,
  button::before {
    content: "";
    display: block;
    width: 25px;
    height: 3px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.6s;
    position: relative;
  }

  .active button {
    border-top-color: transparent;
  }

  .active button::after {
    transform: rotate(-135deg);
    top: -10px;
    border-radius: 4px;
  }

  .active button::before {
    transform: rotate(135deg);
    top: -3px;
    border-radius: 4px;
  }

  @media (min-width: 700px) {
    button {
      display: none;
    }

    nav {
      div {
        opacity: 1;
        flex-direction: row;
        position: inherit;
        height: auto;
        border-bottom: none;
        gap: 15px;
        align-items: center;

        a {
          padding: 8px;
          height: auto;
          border-radius: 20px;
        }
      }
    }

    .active div {
      height: auto;
    }
  }
`;

export default HeaderContainer;
