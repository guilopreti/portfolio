import styled, { keyframes } from "styled-components";

const pulseRing = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.04); }
`;

const scrollDot = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  80% { transform: translateY(12px); opacity: 0; }
  100% { transform: translateY(0); opacity: 0; }
`;

const AboutContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0a0e1a;

  .grid-background {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      linear-gradient(to right, rgba(0, 229, 212, 0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 229, 212, 0.06) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .radial-gradient-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      ellipse 80% 60% at 50% 50%,
      rgba(0, 229, 212, 0.06) 0%,
      transparent 70%
    );
  }

  .blob-1 {
    position: absolute;
    pointer-events: none;
    top: 20%;
    left: 5%;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(124, 58, 237, 0.12) 0%,
      transparent 70%
    );
    filter: blur(40px);
  }

  .blob-2 {
    position: absolute;
    pointer-events: none;
    bottom: 15%;
    right: 5%;
    width: 350px;
    height: 350px;
    background: radial-gradient(
      circle,
      rgba(0, 229, 212, 0.1) 0%,
      transparent 70%
    );
    filter: blur(50px);
  }

  .about-principal-section {
    position: relative;
    z-index: 10;
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding-top: 5rem;
  }

  .image-section {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container {
    position: relative;
    width: 260px;
    height: 260px;
  }

  .outer-ring-1 {
    position: absolute;
    border-radius: 9999px;
    border: 1px solid rgba(0, 229, 212, 0.2);
    inset: -16px;
    animation: ${pulseRing} 3s ease-in-out infinite;
  }

  .outer-ring-2 {
    position: absolute;
    border-radius: 9999px;
    border: 1px solid rgba(124, 58, 237, 0.15);
    inset: -8px;
    animation: ${pulseRing} 3s ease-in-out infinite 1.5s;
  }

  .inner-circle {
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: linear-gradient(135deg, #00e5d4 0%, #7c3aed 50%, #00bcd4 100%);
    padding: 2px;

    div {
      width: 100%;
      height: 100%;
      border-radius: 9999px;
      background: #0a0e1a;
    }
  }

  figure {
    position: absolute;
    border-radius: 9999px;
    overflow: hidden;
    inset: 2px;
    background: #0d1326;
    box-shadow: 0 0 40px rgba(0, 229, 212, 0.15);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    figcaption {
      display: none;
    }
  }

  .description-section {
    flex: 1;
    text-align: center;
  }

  .greeting-div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1rem;

    div {
      height: 1px;
      width: 2rem;
      background: #00e5d4;
    }

    span {
      color: #00e5d4;
      font-size: 0.875rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-family: "Inter", sans-serif;
    }
  }

  .title-div {
    h1 {
      color: white;
      margin-bottom: 0.75rem;
      font-family: "Space Grotesk", sans-serif;
      letter-spacing: -0.025em;
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      line-height: 1.05;

      span {
        background: linear-gradient(
          135deg,
          #00e5d4 0%,
          #00bcd4 50%,
          #7c3aed 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    h2 {
      color: rgba(255, 255, 255, 0.8);
      font-family: "Inter", sans-serif;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.55);
    font-family: "Inter", sans-serif;
    max-width: 36rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;
    line-height: 1.8;
    font-size: 1rem;
    font-weight: 500;
  }

  .cta-buttons-div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;

    button:nth-child(1) {
      padding: 0.875rem 1.75rem;
      border-radius: 0.5rem;
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      color: #0a0e1a;
      transition: all 300ms;
      background: linear-gradient(135deg, #00e5d4, #00bcd4);
      box-shadow: 0 0 20px rgba(0, 229, 212, 0.3);
    }

    button:nth-child(1):hover {
      box-shadow: 0 0 30px rgba(0, 229, 212, 0.5);
    }

    button:nth-child(2) {
      padding: 0.875rem 1.75rem;
      border-radius: 0.5rem;
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      color: #00e5d4;
      border: 1px solid rgba(0, 229, 212, 0.3);
      transition: all 300ms;
    }

    button:nth-child(2):hover {
      border-color: rgba(0, 229, 212, 0.7);
      background: rgba(0, 229, 212, 0.05);
    }
  }

  .scroll-button {
    display: none;
    position: absolute;
    bottom: 2.5rem;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    &:hover span {
      color: rgba(0, 229, 212, 0.6);
    }

    &:hover div {
      border-color: rgba(0, 229, 212, 0.4);
    }

    span {
      color: rgba(255, 255, 255, 0.3);
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      font-family: "Inter", sans-serif;
      transition: color 200ms;
    }

    .scroll-border {
      width: 1.25rem;
      height: 2rem;
      border-radius: 9999px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: flex-start;
      justify-content: center;
      padding: 0.375rem 0.375rem;

      div {
        width: 0.25rem;
        height: 0.375rem;
        border-radius: 9999px;
        background: #00e5d4;
        animation: ${scrollDot} 2s ease-in-out infinite;
      }
    }
  }

  @media (min-width: 640px) {
    .cta-buttons-div {
      flex-direction: row;
    }
  }

  @media (min-width: 1024px) {
    .about-principal-section {
      flex-direction: row;
      gap: 6rem;
    }

    .description-section {
      text-align: left;
    }

    .greeting-div {
      justify-content: flex-start;
    }

    p {
      margin-left: 0;
    }

    .cta-buttons-div {
      justify-content: flex-start;
    }

    .scroll-button {
      display: flex;
    }
  }
`;

export default AboutContainer;
