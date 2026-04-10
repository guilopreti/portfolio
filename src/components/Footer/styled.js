import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: #070b16;

  section {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .footer-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .footer-brand-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    > span:nth-child(1) {
      color: #ffffff;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 600;
      letter-spacing: 0.025em;
    }

    > span:nth-child(2) {
      color: rgba(255, 255, 255, 0.3);
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
    }
  }

  .footer-nav-div {
    display: flex;
    align-items: center;
    gap: 6px;

    button {
      color: rgba(255, 255, 255, 0.3);
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      letter-spacing: 0.05em;
      transition: color 200ms;

      &:hover {
        color: #00e5d4;
      }
    }
  }

  .footer-links-div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem; /* w-9 */
      height: 2.25rem; /* h-9 */
      border-radius: 0.5rem; /* rounded-lg */
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 200ms;

      svg path {
        fill: rgba(255, 255, 255, 0.4);
        transition: fill 200ms;
      }

      &:hover {
        border-color: rgba(0, 229, 212, 0.5);
        background-color: rgba(0, 229, 212, 0.1);

        svg path {
          fill: #00e5d4;
        }
      }
    }
  }

  .footer-bottom {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    p {
      color: rgba(255, 255, 255, 0.2);
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
    }
  }

  @media (min-width: 375px) {
    .footer-nav-div {
      gap: 16px;
    }
  }

  @media (min-width: 425px) {
    .footer-nav-div {
      gap: 1.5rem;
    }
  }

  @media (min-width: 640px) {
    .footer-bottom {
      flex-direction: row;
    }
  }

  @media (min-width: 768px) {
    .footer-top {
      flex-direction: row;
      align-items: center;
    }

    .footer-brand-div {
      align-items: flex-start;
    }
  }
`;

export default FooterContainer;
