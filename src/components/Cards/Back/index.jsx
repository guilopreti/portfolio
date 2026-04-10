import { FiGithub } from "react-icons/fi";
import { LuServer } from "react-icons/lu";
import BackCardContainer from "./styled";

const BackCard = ({ title, description, code_url, techs }) => {
  return (
    <BackCardContainer>
      <div className="backend-card-accent-bar"></div>

      <div className="backend-card-content">
        <div className="backend-card-header">
          <div>
            <LuServer size={27} />
          </div>

          <div>
            <div>Back End</div>
            <h3>{title}</h3>
          </div>
        </div>

        <p>{description}</p>

        <div className="backend-card-techs">
          {techs.map((tech) => (
            <span key={`${title}_${tech.name}`}>{tech.name}</span>
          ))}
        </div>

        <div className="preview-code-div">
          <a href={code_url} target="_blank" rel="noreferrer">
            <FiGithub size={13} /> Código
          </a>
        </div>
      </div>
    </BackCardContainer>
  );
};

export default BackCard;
