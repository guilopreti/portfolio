import styled, { keyframes } from "styled-components";

const currentPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 229, 212, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 229, 212, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 229, 212, 0); }
`;

const ExperienceItemContainer = styled.li`
  position: relative;
  padding-left: 2.5rem;

  .dot-div {
    position: absolute;
    left: 0;
    top: 0.25rem;
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    border: 2px solid;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: ${(props) => props.$color};
    background: ${(props) => (props.$open ? props.$color : "#0a0e1a")};
    box-shadow: ${(props) =>
      props.$open ? `0 0 12px ${props.$color}60` : "none"};
    transition: all 0.3s;

    .pulse-dot-div {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 9999px;
      background: ${(props) => props.$color};
      animation: ${currentPulse} 2s ease-in-out infinite;
    }
  }

  .experience-item-card {
    border-radius: 0.75rem;
    border: 1px solid;
    transition: all 300ms;
    overflow: hidden;
    background: ${(props) =>
      props.$open ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)"};
    border-color: ${(props) =>
      props.$open ? `${props.$color}30` : "rgba(255,255,255,0.06)"};
    box-shadow: ${(props) =>
      props.$open
        ? `0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px ${props.$color}10`
        : "none"};
  }

  .experience-card-header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.25rem;
    text-align: left;
  }

  .card-header-content {
    flex: 1;
    min-width: 0;

    div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.25rem;

      > span:nth-child(1) {
        font-family: "Space Grotesk", sans-serif;
        font-weight: 600;
        color: white;
        font-size: 0.95rem;
        letter-spacing: normal;
      }

      > span:nth-child(2) {
        padding: 0.125rem 0.5rem;
        border-radius: 9999px;
        font-size: 0.75rem;
        font-family: "Inter", sans-serif;
        background: ${(props) => `${props.$color}15`};
        color: ${(props) => props.$color};
        border: ${(props) => `1px solid ${props.$color}30`};
      }
    }

    p {
      color: rgba(255, 255, 255, 0.6);
      font-family: "Inter", sans-serif;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      letter-spacing: 0.05em;
      color: ${(props) =>
        props.$color === "#7c3aed" ? "#a78bfa" : `${props.$color}80`};
    }
  }

  .experience-chevron-wrapper {
    color: rgba(255, 255, 255, 0.3);
    margin-top: 0.25rem;
    flex-shrink: 0;

    svg {
      transition: transform 300ms;
      transform: ${(props) =>
        props.$open ? "rotate(180deg)" : "rotate(0deg)"};
    }
  }

  .experience-card-body {
    padding: 0 1.25rem 1.25rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .experience-card-body-divider {
    height: 1px;
    background: ${(props) =>
      `linear-gradient(to right, ${props.$color}30, transparent)`};
  }

  .card-body-description {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;

      > span:nth-child(1) {
        margin-top: 0.5rem;
        width: 0.25rem;
        height: 0.25rem;
        border-radius: 9999px;
        flex-shrink: 0;
        background: ${(props) => props.$color};
      }

      > span:nth-child(2) {
        color: rgba(255, 255, 255, 0.55);
        font-family: "Inter", sans-serif;
        font-size: 0.85rem;
        line-height: 1.75;
      }
    }
  }

  .card-body-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.375rem;

    span {
      padding: 0.125rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-family: "Inter", sans-serif;
      color: ${(props) =>
        props.$color === "#7c3aed" ? "#a78bfa" : `${props.$color}aa`};
      background: ${(props) =>
        props.$color === "#7c3aed" ? "#a78bfa10" : `${props.$color}08`};
      border: ${(props) =>
        props.$color === "#7c3aed"
          ? "1px solid #a78bfa25"
          : `1px solid ${props.$color}20`};
    }
  }
`;

export default ExperienceItemContainer;
