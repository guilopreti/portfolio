import FrontCardContainer from "./styled";
import { AiOutlineLink } from "react-icons/ai";
import { SiGithub } from "react-icons/si";

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
      <h4>{title}</h4>
      <figure>
        <img src={img_url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
      <p>{description}</p>
      <p>Tecnologias: {techs.map((tech) => tech.name).join(", ")}</p>

      <div className="preview-code-div">
        <a href={preview_url} target="_blank" rel="noreferrer">
          <AiOutlineLink /> Aplicação
        </a>
        <a href={code_url} target="_blank" rel="noreferrer">
          <SiGithub /> Código
        </a>
      </div>
    </FrontCardContainer>
  );
};

export default FrontCard;
