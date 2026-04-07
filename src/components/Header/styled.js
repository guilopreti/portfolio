import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 300ms;
  background: ${(props) =>
    props.$scrolled ? "rgba(10, 14, 26, 0.85)" : "transparent"};
  backdrop-filter: ${(props) => (props.$scrolled ? "blur(12px)" : "none")};
  -webkit-backdrop-filter: ${(props) =>
    props.$scrolled ? "blur(12px)" : "none"};
  border-bottom: ${(props) =>
    props.$scrolled ? "1px solid rgba(0, 229, 212, 0.12)" : "none"};

  section {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .social-links-div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 200ms;

      &:hover {
        border-color: rgba(0, 229, 212, 0.5);
        background-color: rgba(0, 229, 212, 0.1);
      }
    }
  }

  .linkedin-link {
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .github-link {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  .logo-name-div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;

    span {
      color: #ffffff;
      font-family: "Space Grotesk", sans-serif;
      letter-spacing: 0.1em;
      font-size: 0.875rem;
      opacity: 0.6;
      transition: opacity 200ms;

      &:hover {
        opacity: 1;
      }
    }
  }

  .mobile-nav {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(10, 14, 26, 0.95);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);

    a {
      display: flex;
      justify-content: initial;
      align-items: center;
      width: 100%;
      height: 54px;
      text-align: left;
      padding: 1rem 1.5rem;
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.7);
      transition: all 200ms;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }

    a:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.05);
    }
  }

  .hamburger-btn {
    display: flex;
    flex-direction: column;
    gap: 0.375rem; /* gap-1.5 */
    padding: 0.5rem;
    background: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 1.25rem;
      height: 1px;
      background-color: #00e5d4;
      transition: all 300ms;
    }

    span:nth-child(1) {
      ${(props) =>
        props.$open && `transform: translateY(0.4375rem) rotate(45deg);`}
    }

    span:nth-child(2) {
      ${(props) => props.$open && `opacity: 0;`}
    }

    span:nth-child(3) {
      ${(props) =>
        props.$open && `transform: translateY(-0.4375rem) rotate(-45deg);`}
    }
  }

  @media (min-width: 768px) {
    .logo-name-div {
      position: relative;
      margin-left: auto;
      left: 0;
    }

    .hamburger-btn {
      display: none;
    }

    .mobile-nav {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .logo-name-div {
      position: absolute;
      left: 50%;
    }
  }
`;

export const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

export const NavItem = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-family: "Inter", sans-serif;
  color: rgba(255, 255, 255, 0.7);
  transition: color 200ms;

  &:hover {
    color: #ffffff;
  }

  .active-line {
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: #00e5d4;
    transition: all 300ms;
    transform-origin: left;
    transform: ${(props) => (props.$active ? "scaleX(1)" : "scaleX(0)")};
    opacity: ${(props) => (props.$active ? 1 : 0)};
  }

  .hover-line {
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: rgba(0, 229, 212, 0.4);
    transform: scaleX(0);
    transition: transform 200ms;
    transform-origin: left;
  }

  &:hover .hover-line {
    transform: scaleX(1);
  }
`;
