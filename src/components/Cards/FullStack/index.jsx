import { FullStackCardContainer } from "./styled";
import { AiOutlineLink } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { useState } from "react";

const FullStackCard = ({
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
    <FullStackCardContainer type={type}>
      <h4>{`${title} ${type === "back" ? "API" : ""}`}</h4>
      <div className="buttons-div">
        <button onClick={() => setType("front")}>Front End</button>
        <button onClick={() => setType("back")}>Back End</button>
      </div>
      {type === "front" ? (
        <>
          <figure>
            <img src={img_url} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
          <p>{front_description}</p>
          <p>
            Tecnologias:{" "}
            {front_techs
              .concat(both_techs)
              .map((tech) => tech.name)
              .join(", ")}
          </p>

          <div className="preview-code-div">
            <a href={preview_url} target="_blank" rel="noreferrer">
              <AiOutlineLink /> Aplicação
            </a>
            <a href={front_code_url} target="_blank" rel="noreferrer">
              <SiGithub /> Código
            </a>
          </div>
        </>
      ) : (
        <>
          <p>{back_description}</p>
          <p>
            Tecnologias:{" "}
            {back_techs
              .concat(both_techs)
              .map((tech) => tech.name)
              .join(", ")}
          </p>

          <div className="preview-code-div">
            <a href={back_code_url} target="_blank" rel="noreferrer">
              <SiGithub /> Código
            </a>
          </div>
        </>
      )}
    </FullStackCardContainer>
  );
};

export default FullStackCard;
