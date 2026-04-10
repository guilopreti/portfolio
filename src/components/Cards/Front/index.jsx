import FrontCardContainer from "./styled";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";

const FrontCard = ({
  title,
  description,
  img_url,
  preview_url,
  code_url,
  techs,
}) => {
  return (
    <FrontCardContainer>
      <figure>
        <img src={img_url} alt={title} />
        <figcaption>{title}</figcaption>
        <div className="image-gradient"></div>
        <div>Front End</div>
      </figure>

      <div className="frontend-card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="frontend-card-techs">
          {techs.map((tech) => (
            <span key={`${title}_${tech.name}`}>{tech.name}</span>
          ))}
        </div>

        <div className="preview-code-div">
          <a href={preview_url} target="_blank" rel="noreferrer">
            <LuExternalLink size={13} /> Aplicação
          </a>
          <a href={code_url} target="_blank" rel="noreferrer">
            <FiGithub size={13} /> Código
          </a>
        </div>
      </div>
    </FrontCardContainer>
  );
};

export default FrontCard;
