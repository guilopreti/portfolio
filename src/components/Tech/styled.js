import styled from "styled-components";

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.75rem;
  cursor: default;
  transition: all 300ms;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.03);

  &:hover {
    border-color: rgba(0, 229, 212, 0.3);
    background: rgba(0, 229, 212, 0.05);
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 229, 212, 0.08);
  }

  &:hover span.tech-label {
    color: rgba(0, 229, 212, 0.8);
  }

  .tech-icon-div {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
      max-width: 44px;
      max-height: 44px;
      color: #00e5d4;
    }

    span {
      color: #00e5d4;
      font-family: "Space Grotesk", sans-serif;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 0.05em;
    }
  }

  .tech-label {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    font-family: "Inter", sans-serif;
    text-align: center;
    transition: color 200ms;
    line-height: 1.25;
  }
`;

export default TechContainer;
