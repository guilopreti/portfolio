import { useState } from "react";
import TechContainer from "./styled";

const Tech = ({ name, icon }) => {
  const [active, setActive] = useState(null);
  return (
    <TechContainer key={name} active={active}>
      <div className="tech-name-div">
        <h6>
          {name} <span></span>
        </h6>
      </div>

      <div
        className="tech-icon-div"
        onMouseEnter={() => setActive("active")}
        onMouseLeave={() => setActive(null)}
      >
        <span>{icon}</span>
      </div>
    </TechContainer>
  );
};

export default Tech;
