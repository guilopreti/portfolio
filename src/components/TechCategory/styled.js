import styled from "styled-components";

const TechCategoryContainer = styled.li`
  .category-header-div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    > div:nth-child(1) {
      height: 1px;
      flex: 1;
      background: ${(props) =>
        `linear-gradient(to right, ${props.$color}40, transparent)`};
    }

    > div:last-child {
      height: 1px;
      flex: 1;
      background: ${(props) =>
        `linear-gradient(to left, ${props.$color}40, transparent)`};
    }

    span {
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-family: "Inter", sans-serif;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      border: 1px solid;
      color: ${(props) => props.$color};
      border-color: ${(props) => `${props.$color}30`};
      background-color: ${(props) => `${props.$color}10`};
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;

    > div {
      width: calc((100% - 2 * 0.75rem) / 3);
    }

    @media (min-width: 640px) {
      > div {
        width: calc((100% - 3 * 0.75rem) / 4);
      }
    }
    @media (min-width: 768px) {
      > div {
        width: calc((100% - 5 * 0.75rem) / 6);
      }
    }
    @media (min-width: 1024px) {
      > div {
        width: calc((100% - 7 * 0.75rem) / 8);
      }
    }
  }
`;

export default TechCategoryContainer;
