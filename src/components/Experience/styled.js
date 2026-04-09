import styled from "styled-components";

const ExperienceContainer = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  position: relative;
  background: #0a0e1a;

  .experience-top-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(0, 229, 212, 0.15),
      transparent
    );
  }

  .experience-section-blob {
    position: absolute;
    pointer-events: none;
    top: 20%;
    right: 0%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(0, 229, 212, 0.05) 0%,
      transparent 70%
    );
    filter: blur(60px);
  }

  .experience-content {
    max-width: 64rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .experience-header-div {
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
      color: white;
      font-family: "Space Grotesk", sans-serif;
      margin-bottom: 1rem;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 700;

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
      max-width: 32rem;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.7;
    }
  }

  .experience-tab-div {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      border-radius: 0.75rem;
      padding: 0.25rem;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.07);
    }

    .work-tab-button,
    .education-tab-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.625rem 1.25rem;
      border-radius: 0.5rem;
      font-size: 0.875rem;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      transition: all 200ms;
    }

    .work-tab-button {
      background: ${(props) =>
        props.$tab === "work" ? "rgba(0, 229, 212, 0.12)" : "transparent"};
      color: ${(props) =>
        props.$tab === "work" ? "#00e5d4" : "rgba(255,255,255,0.4)"};
      border: 1px solid
        ${(props) =>
          props.$tab === "work" ? "rgba(0,229,212,0.25)" : "transparent"};
    }

    .education-tab-button {
      background: ${(props) =>
        props.$tab === "education" ? "rgba(124,58,237,0.12)" : "transparent"};
      color: ${(props) =>
        props.$tab === "education" ? "#a78bfa" : "rgba(255,255,255,0.4)"};
      border: 1px solid
        ${(props) =>
          props.$tab === "education" ? "rgba(124,58,237,0.25)" : "transparent"};
    }
  }

  .experience-timeline-div {
    position: relative;

    .vertical-line-div {
      position: absolute;
      left: 0.5rem;
      top: 0.75rem;
      bottom: 0.75rem;
      width: 1px;
      background: ${(props) =>
        props.$tab === "work"
          ? `linear-gradient(to bottom, #00e5d440, #00e5d410, transparent)`
          : `linear-gradient(to bottom, #7c3aed40, #7c3aed10, transparent)`};
      transition: background 0.4s;
    }

    .experience-timeline-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }

  .toeic-badge-container {
    margin-top: 2rem;
    margin-left: 2.5rem;
    padding: 1rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
    background: rgba(124, 58, 237, 0.06);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .toeic-badge-icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: rgba(124, 58, 237, 0.12);
    border: 1px solid rgba(124, 58, 237, 0.25);

    svg {
      color: #a78bfa;
    }
  }

  .toeic-badge-texts {
    > p:nth-child(1) {
      color: rgba(255, 255, 255, 0.8);
      font-size: 0.875rem;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 600;
    }

    > p:nth-child(2) {
      color: rgba(255, 255, 255, 0.4);
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      margin-top: 0.125rem;
    }
  }

  .toeic-badge-level {
    margin-left: auto;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-size: 0.75rem;
    font-family: "Inter", sans-serif;
    flex-shrink: 0;
    background: rgba(124, 58, 237, 0.15);
    color: #a78bfa;
    border: 1px solid rgba(124, 58, 237, 0.3);
  }
`;

export default ExperienceContainer;
