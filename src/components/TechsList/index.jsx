import { useSelector } from "react-redux";
import Tech from "../Tech";
import TechsContainer from "./styled";

const TechsList = () => {
  const techs = useSelector((state) => state.techs);

  return (
    <TechsContainer>
      <h2>TECNOLOGIAS E FERRAMENTAS</h2>
      <ul>
        {techs.map((tech) => {
          return <Tech name={tech.name} icon={tech.icon} />;
        })}
      </ul>
    </TechsContainer>
  );
};

export default TechsList;
