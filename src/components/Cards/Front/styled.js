import styled from "styled-components";

const FrontCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d1326;
  transition: all 300ms;

  &:hover {
    border-color: rgba(0, 229, 212, 0.2);
    transform: translateY(-4px);
    box-shadow:
      0 16px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(0, 229, 212, 0.06);
  }

  &:hover img {
    transform: scale(1.05);
  }

  figure {
    position: relative;
    overflow: hidden;
    height: 190px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 500ms;
    }

    figcaption {
      display: none;
    }

    .image-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(13, 19, 38, 0.8) 100%
      );
    }

    > div:last-child {
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      padding: 0.25rem 0.625rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      background: rgba(0, 229, 212, 0.15);
      color: #00e5d4;
      border: 1px solid rgba(0, 229, 212, 0.3);
      backdrop-filter: blur(8px);
    }
  }

  .frontend-card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.75rem;
    padding: 1.25rem;

    h3 {
      color: #ffffff;
      font-family: "Space Grotesk", sans-serif;
      font-weight: 600;
      font-size: 1.05rem;
      line-height: 1.25;
    }

    p {
      color: rgba(255, 255, 255, 0.5);
      font-family: "Inter", sans-serif;
      flex: 1;
      font-size: 0.85rem;
      line-height: 1.7;
    }
  }

  .frontend-card-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;

    span {
      padding: 0.125rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      background: #00e5d410;
      color: #00e5d4;
      border: 1px solid #00e5d425;
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
`;

export default FrontCardContainer;
