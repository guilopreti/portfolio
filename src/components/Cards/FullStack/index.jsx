import { FullStackCardContainer } from "./styled";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { SlScreenDesktop } from "react-icons/sl";
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
      <div className="fullstack-card-accent-bar"></div>

      <div className="fullstack-card-header">
        <h3>{`${title} ${type === "back" ? "API" : ""}`}</h3>
        <div className="buttons-div">
          <button onClick={() => setType("front")}>Front End</button>
          <button onClick={() => setType("back")}>Back End</button>
        </div>
      </div>

      <div className="fullstack-header-divider"></div>

      {type === "front" ? (
        <div className="fullstack-card-content">
          <figure>
            <img src={img_url} alt={title} />
            <figcaption>{title}</figcaption>
            <div></div>
          </figure>

          <div className="fullstack-card-description">
            <p>{front_description}</p>

            <div className="fullstack-card-techs">
              {front_techs.concat(both_techs).map((tech) => (
                <span key={`${title}_${tech.name}`}>{tech.name}</span>
              ))}
            </div>

            <div className="preview-code-div">
              <a href={preview_url} target="_blank" rel="noreferrer">
                <LuExternalLink size={13} /> Aplicação
              </a>
              <a href={front_code_url} target="_blank" rel="noreferrer">
                <FiGithub size={13} /> Código
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="fullstack-card-content">
          <div className="fullstack-back-box">
            <div>
              <SlScreenDesktop size={50} />
              <span>API / Back End</span>
            </div>
          </div>

          <div className="fullstack-card-description">
            <p>{back_description}</p>

            <div className="fullstack-card-techs">
              {back_techs.concat(both_techs).map((tech) => (
                <span key={`${title}_${tech.name}`}>{tech.name}</span>
              ))}
            </div>

            <div className="preview-code-div">
              <a href={back_code_url} target="_blank" rel="noreferrer">
                <FiGithub size={13} /> Código
              </a>
            </div>
          </div>
        </div>
      )}
    </FullStackCardContainer>
  );
};

export default FullStackCard;
