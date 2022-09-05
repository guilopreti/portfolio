import styled from "styled-components";

const TechContainer = styled.li`
  width: 130px;
  color: var(--turquoise);

  .tech-name-div {
    background-color: var(--black-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 15px;
    opacity: ${(props) => (props.active ? 1 : 0)};
    height: 30px;
    white-space: nowrap;
    transition: 0.6s;

    h6 {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;
      align-items: center;
      gap: 4px;
      margin-top: 14px;
    }

    h6 span {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid;
      border-top-color: var(--black-blue);
      width: 20px;
    }
  }

  .tech-icon-div {
    width: 100%;
    height: 80px;
    background-color: var(--black-blue);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    svg {
      width: 55px;
      height: 55px;
    }
  }
`;

export default TechContainer;
