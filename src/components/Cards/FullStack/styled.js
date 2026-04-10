import styled from "styled-components";

export const FullStackCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.07);
  background: #0d1326;
  transition: all 300ms;
  height: 100%;
  overflow: hidden;

  &:hover {
    border-color: rgba(0, 188, 212, 0.25);
    transform: translateY(-4px);
    box-shadow:
      0 16px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(0, 188, 212, 0.08);
  }

  .fullstack-card-accent-bar {
    height: 0.125rem;
    width: 100%;
    background: linear-gradient(to right, #00e5d4, #7c3aed, #00bcd4);
  }

  .fullstack-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem 0.75rem 1.25rem;
    gap: 1rem;

    h3 {
      color: #ffffff;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 600;
      font-size: 1rem;
      margin: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .buttons-div {
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.125rem;
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.07);

    button {
      padding: 0.25rem 0.75rem;
      border-radius: 0.375rem;
      font-family: "Inter", sans-serif;
      font-size: 0.75rem;
      font-weight: 500;
      transition: all 200ms;
      border: 1px solid transparent;
    }

    button:nth-child(1) {
      color: ${(props) =>
        props.type === "front" ? "#00e5d4" : "rgba(255, 255, 255, 0.4)"};
      background: ${(props) =>
        props.type === "front" ? "rgba(0, 229, 212, 0.15)" : "transparent"};
      ${(props) =>
        props.type === "front" && "border: 1px solid rgba(0, 229, 212, 0.25)"}
    }

    button:nth-child(2) {
      color: ${(props) =>
        props.type === "back" ? "#a78bfa" : "rgba(255, 255, 255, 0.4)"};
      background: ${(props) =>
        props.type === "back" ? "rgba(124, 58, 237, 0.15)" : "transparent"};
      ${(props) =>
        props.type === "back" && "border: 1px solid rgba(124, 58, 237, 0.25)"}
    }
  }

  .fullstack-header-divider {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    height: 1px;
    background: rgba(255, 255, 255, 0.06);
  }

  .fullstack-card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  figure {
    position: relative;
    overflow: hidden;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-top: 1rem;
    border-radius: 0.75rem;
    height: 170px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }

    figcaption {
      display: none;
    }

    div {
      position: absolute;
      inset: 0;
      border-radius: 0.75rem;
      background: linear-gradient(
        to bottom,
        transparent 40%,
        rgba(13, 19, 38, 0.7) 100%
      );
    }
  }

  .fullstack-card-description {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.75rem;
    padding: 1.25rem;

    p {
      color: rgba(255, 255, 255, 0.5);
      font-family: "Inter", sans-serif;
      font-size: 0.83rem;
      line-height: 1.75;
      margin: 0;
    }
  }

  .fullstack-card-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;
    ${(props) => props.type === "back" && "margin-top: auto"};

    span {
      padding: 0.125rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      background: ${(props) =>
        props.type === "front" ? "#00e5d410" : "#a78bfa10"};
      color: ${(props) => (props.type === "front" ? "#00e5d4" : "#a78bfa")};
      border: ${(props) =>
        props.type === "front" ? "1px solid #00e5d425" : "1px solid #a78bfa25"};
    }
  }

  .preview-code-div {
    display: flex;
    gap: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);

    a {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;

      transition: color 200ms;
    }

    > a:nth-child(1) {
      color: #00e5d4;
    }

    > a:last-child {
      color: rgba(255, 255, 255, 0.4);
    }

    a:hover {
      color: #ffffff;
    }
  }

  .fullstack-back-box {
    position: relative;
    overflow: hidden;
    margin-left: 1.25rem;
    margin-right: 1.25rem;
    margin-top: 1rem;
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 170px;
    background: linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.08) 0%,
      rgba(79, 70, 229, 0.05) 100%
    );
    border: 1px dashed rgba(124, 58, 237, 0.2);

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      opacity: 0.4;
      color: #a78bfa;
      font-family: "Inter", sans-serif;
      font-size: 0.75rem;
    }

    span {
      font-size: 16px;
    }
  }
`;
