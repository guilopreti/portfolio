import { useState } from "react";
import TechContainer from "./styled";

const Tech = ({ name, icon }) => {
  return (
    <TechContainer key={name}>
      <div className="tech-icon-div">
        {name === "HapiJS" ? <span>HAPI</span> : icon}
      </div>

      <span className="tech-label">{name}</span>
    </TechContainer>
  );
};

export default Tech;
