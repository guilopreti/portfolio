import styled from "styled-components";

const BackCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d1326;
  transition: all 300ms;
  height: 100%;
  overflow: hidden;

  &:hover {
    border-color: rgba(124, 58, 237, 0.3);
    transform: translateY(-4px);
    box-shadow:
      0 16px 40px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(124, 58, 237, 0.1);
  }

  .backend-card-accent-bar {
    height: 0.125rem;
    width: 100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background: linear-gradient(to right, #7c3aed, #4f46e5);
  }

  .backend-card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 1rem;
    padding: 1.25rem;
  }

  .backend-card-header {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;

    > div:nth-child(1) {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: rgba(124, 58, 237, 0.1);
      border: 1px solid rgba(124, 58, 237, 0.2);
      color: #7c3aed;
    }

    > div:last-child {
      div {
        padding: 0.125rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        margin-bottom: 0.375rem;
        display: inline-block;
        background: rgba(124, 58, 237, 0.12);
        color: #a78bfa;
        border: 1px solid rgba(124, 58, 237, 0.25);
      }

      h3 {
        color: #ffffff;
        font-family: "Space Grotesk", sans-serif;
        font-weight: 600;
        font-size: 1.05rem;
        line-height: 1.25;
      }
    }
  }

  p {
    color: rgba(255, 255, 255, 0.5);
    font-family: "Inter", sans-serif;
    flex: 1;
    font-size: 0.85rem;
    line-height: 1.7;
  }

  .backend-card-techs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;

    span {
      padding: 0.125rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      background: #a78bfa10;
      color: #a78bfa;
      border: 1px solid #a78bfa25;
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
      color: rgba(255, 255, 255, 0.4);
      transition: color 200ms;
    }

    a:hover {
      color: #ffffff;
    }
  }
`;

export default BackCardContainer;
