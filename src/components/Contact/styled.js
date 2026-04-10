import styled from "styled-components";

const ContactContainer = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  position: relative;
  overflow: hidden;
  background: #0a0e1a;

  .contact-divider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 229, 212, 0.2),
      transparent
    );
  }

  .contact-blob-right {
    position: absolute;
    top: 30%;
    right: -100px;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(0, 229, 212, 0.07) 0%,
      transparent 70%
    );
    filter: blur(60px);
    pointer-events: none;
  }

  .contact-blob-left {
    position: absolute;
    bottom: 20%;
    left: -80px;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(124, 58, 237, 0.09) 0%,
      transparent 70%
    );
    filter: blur(50px);
    pointer-events: none;
  }

  .contact-section-content {
    max-width: 64rem;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 4rem;

    > span:nth-child(1) {
      color: #00e5d4;
      font-size: 0.75rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      font-family: "Inter", sans-serif;
      margin-bottom: 1rem;
      display: block;
    }

    h2 {
      color: #ffffff;
      font-family: "Space Grotesk", sans-serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;
      margin-bottom: 1rem;

      span {
        background: linear-gradient(135deg, #00e5d4, #7c3aed);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.4);
      font-family: "Inter", sans-serif;
      max-width: 28rem;
      margin: 0 auto;
      line-height: 1.7;
    }
  }

  .contact-infos {
    display: grid;
    gap: 3rem;
    align-items: start;
  }

  .contact-infos-left {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    > div:nth-child(1) {
      h3 {
        color: #ffffff;
        font-family: "Space Grotesk", sans-serif;
        font-weight: 600;
        margin-bottom: 0.75rem;
        font-size: 1.1rem;
      }

      p {
        color: rgba(255, 255, 255, 0.4);
        font-family: "Inter", sans-serif;
        font-size: 0.875rem;
        line-height: 1.8;
      }
    }
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 1rem;

      &:hover > div:first-child {
        border-color: rgba(0, 229, 212, 0.5);
        background: rgba(0, 229, 212, 0.1);
      }
      &:hover p:first-child {
        color: #00e5d4;
      }
    }
  }

  .contact-links-icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 229, 212, 0.2);
    transition: all 300ms;
    color: #00e5d4;
  }

  .contact-links-text {
    > p:nth-child(1) {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      transition: color 300ms;
    }

    > p:last-child {
      color: rgba(255, 255, 255, 0.3);
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
    }
  }

  .contact-snippet-box {
    border-radius: 0.75rem;
    padding: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: #070b16;
    font-family: "Courier New", Courier, monospace;
    display: none;
  }

  .contact-snippet-dots {
    display: flex;
    gap: 0.375rem;
    margin-bottom: 1rem;

    div {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 9999px;
    }

    > div:nth-child(1) {
      background: rgba(239, 68, 68, 0.6);
    }
    > div:nth-child(2) {
      background: rgba(234, 179, 8, 0.6);
    }
    > div:nth-child(3) {
      background: rgba(34, 197, 94, 0.6);
    }
  }

  .contact-snippet-code {
    font-size: 0.75rem;
    line-height: 1.5rem;
  }

  @media (min-width: 1024px) {
    .contact-infos {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    .contact-infos-left {
      grid-column: span 2 / span 2;
    }

    .contact-snippet-box {
      display: block;
    }

    .contact-infos-right {
      grid-column: span 3 / span 3;
    }
  }
`;

export default ContactContainer;
