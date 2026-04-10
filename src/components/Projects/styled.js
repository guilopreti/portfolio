import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding-top: 7rem;
  padding-bottom: 7rem;
  background: #070b16;
  position: relative;
  overflow: hidden;

  .projects-section-divider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(124, 58, 237, 0.2),
      transparent
    );
  }

  .projects-content {
    max-width: 72rem;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: relative;
    z-index: 10;
  }

  .projects-header-div {
    text-align: center;
    margin-bottom: 3.5rem;

    > span:nth-child(1) {
      color: #7c3aed;
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
        background: linear-gradient(135deg, #7c3aed, #00e5d4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.4);
      font-family: "Inter", sans-serif;
      max-width: 32rem;
      margin: 0 auto;
      line-height: 1.7;
    }
  }

  .tab-buttons-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      font-weight: 500;
      transition: all 200ms;

      span {
        padding: 0.125rem 0.375rem;
        border-radius: 0.25rem;
        font-size: 0.75rem;
      }
    }

    .button-all {
      color: ${(props) =>
        props.projects === "all" ? "#0a0e1a" : "rgba(255, 255, 255, 0.55)"};
      background: ${(props) =>
        props.projects === "all"
          ? "linear-gradient(135deg, #00e5d4, #00bcd4)"
          : "rgba(255, 255, 255, 0.04)"};
      box-shadow: ${(props) =>
        props.projects === "all" ? "0 0 16px rgba(0, 229, 212, 0.3)" : "none"};
      border: ${(props) =>
        props.projects === "all"
          ? "1px solid transparent"
          : "1px solid rgba(255, 255, 255, 0.08)"};

      span {
        color: ${(props) => (props.projects === "all" ? "#0a0e1a" : "#00e5d4")};
        background: ${(props) =>
          props.projects === "all"
            ? "rgba(10, 14, 26, 0.3)"
            : "rgba(0, 229, 212, 0.08)"};
      }

      &:hover {
        ${(props) =>
          props.projects !== "all" &&
          `border-color: rgba(0, 229, 212, 0.7);
      background: rgba(0, 229, 212, 0.05);`}
      }
    }

    .button-front {
      color: ${(props) =>
        props.projects === "front" ? "#0a0e1a" : "rgba(255, 255, 255, 0.55)"};
      background: ${(props) =>
        props.projects === "front"
          ? "linear-gradient(135deg, #00e5d4, #00bcd4)"
          : "rgba(255, 255, 255, 0.04)"};
      box-shadow: ${(props) =>
        props.projects === "front"
          ? "0 0 16px rgba(0, 229, 212, 0.3)"
          : "none"};
      border: ${(props) =>
        props.projects === "front"
          ? "1px solid transparent"
          : "1px solid rgba(255, 255, 255, 0.08)"};

      span {
        color: ${(props) =>
          props.projects === "front" ? "#0a0e1a" : "#00e5d4"};
        background: ${(props) =>
          props.projects === "front"
            ? "rgba(10, 14, 26, 0.3)"
            : "rgba(0, 229, 212, 0.08)"};
      }

      &:hover {
        ${(props) =>
          props.projects !== "front" &&
          `border-color: rgba(0, 229, 212, 0.7);
      background: rgba(0, 229, 212, 0.05);`}
      }
    }

    .button-back {
      color: ${(props) =>
        props.projects === "back" ? "#0a0e1a" : "rgba(255, 255, 255, 0.55)"};
      background: ${(props) =>
        props.projects === "back"
          ? "linear-gradient(135deg, #00e5d4, #00bcd4)"
          : "rgba(255, 255, 255, 0.04)"};
      box-shadow: ${(props) =>
        props.projects === "back" ? "0 0 16px rgba(0, 229, 212, 0.3)" : "none"};
      border: ${(props) =>
        props.projects === "back"
          ? "1px solid transparent"
          : "1px solid rgba(255, 255, 255, 0.08)"};

      span {
        color: ${(props) =>
          props.projects === "back" ? "#0a0e1a" : "#00e5d4"};
        background: ${(props) =>
          props.projects === "back"
            ? "rgba(10, 14, 26, 0.3)"
            : "rgba(0, 229, 212, 0.08)"};
      }

      &:hover {
        ${(props) =>
          props.projects !== "back" &&
          `border-color: rgba(0, 229, 212, 0.7);
      background: rgba(0, 229, 212, 0.05);`}
      }
    }

    .button-fullstack {
      color: ${(props) =>
        props.projects === "fullstack"
          ? "#0a0e1a"
          : "rgba(255, 255, 255, 0.55)"};
      background: ${(props) =>
        props.projects === "fullstack"
          ? "linear-gradient(135deg, #00e5d4, #00bcd4)"
          : "rgba(255, 255, 255, 0.04)"};
      box-shadow: ${(props) =>
        props.projects === "fullstack"
          ? "0 0 16px rgba(0, 229, 212, 0.3)"
          : "none"};
      border: ${(props) =>
        props.projects === "fullstack"
          ? "1px solid transparent"
          : "1px solid rgba(255, 255, 255, 0.08)"};

      span {
        color: ${(props) =>
          props.projects === "fullstack" ? "#0a0e1a" : "#00e5d4"};
        background: ${(props) =>
          props.projects === "fullstack"
            ? "rgba(10, 14, 26, 0.3)"
            : "rgba(0, 229, 212, 0.08)"};
      }

      &:hover {
        ${(props) =>
          props.projects !== "fullstack" &&
          `border-color: rgba(0, 229, 212, 0.7);
      background: rgba(0, 229, 212, 0.05);`}
      }
    }
  }

  .loading-div {
    margin: 5rem auto;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      #7c3aed 30%,
      #00e5d4 100%
    );
    animation: is-rotating 1s infinite linear;
    position: relative;
  }

  .loading-div::before {
    content: "";
    position: absolute;
    inset: 4px;
    background: #070b16;
    border-radius: 50%;
  }

  @keyframes is-rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .load-more-container {
    display: flex;
    justify-content: center;
    margin-top: 3.5rem;

    button {
      padding: 0.875rem 2.5rem;
      border-radius: 9999px;
      background: transparent;
      color: #00e5d4;
      font-family: "Space Grotesk", sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border: 1px solid rgba(0, 229, 212, 0.3);
      cursor: pointer;
      transition: all 300ms ease;

      &:hover {
        background: rgba(0, 229, 212, 0.1);
        border-color: #00e5d4;
        box-shadow: 0 0 20px rgba(0, 229, 212, 0.2);
        transform: translateY(-2px);
      }
    }
  }

  ul {
    display: grid;
    gap: 1.25rem;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`;

export default ProjectsContainer;
