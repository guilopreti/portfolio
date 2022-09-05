import { SiGithub } from "react-icons/si";
import BackCardContainer from "./styled";

const BackCard = ({ title, description, code_url, techs }) => {
  return (
    <BackCardContainer>
      <h4>{title}</h4>

      <p>{description}</p>
      <p>Tecnologias: {techs.map((tech) => tech.name).join(", ")}</p>

      <div className="preview-code-div">
        <a href={code_url} target="_blank" rel="noreferrer">
          <SiGithub /> Código
        </a>
      </div>
    </BackCardContainer>
  );
};

export default BackCard;
