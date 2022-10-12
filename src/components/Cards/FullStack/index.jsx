import { FullStackCardContainer } from "./styled";
import { AiOutlineLink } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

const FrontCard = ({
  title,
  front_description,
  back_description,
  img_url,
  preview_url,
  front_code_url,
  back_code_url,
  front_techs,
  back_techs,
  both_techs,
}) => {
  const [type, setType] = useState("front");

  return (
    <FullStackCardContainer>
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
    </FullStackCardContainer>
  );
};

export default FrontCard;
