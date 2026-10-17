import { useState } from "react";
import ExperienceItemContainer from "./styled";
import { GoChevronDown } from "react-icons/go";

const ExperienceItem = ({ item, accentColor }) => {
  const [open, setOpen] = useState(false);

  return (
    <ExperienceItemContainer $color={accentColor} $open={open}>
      <div className="dot-div">
        {item.current && <div className="pulse-dot-div"></div>}
      </div>

      <div className="experience-item-card">
        <button
          className="experience-card-header"
          onClick={() => setOpen(!open)}
        >
          <div className="card-header-content">
            <div>
              <span>{item.company}</span>
              {item.type === "education" &&
                (!item.current ? (
                  <span>Concluído</span>
                ) : (
                  <span>Cursando</span>
                ))}
            </div>

            <p>{item.role}</p>

            <span>{item.period}</span>
          </div>

          <span className="experience-chevron-wrapper">
            <GoChevronDown size={18} />
          </span>
        </button>

        {open && (
          <div className="experience-card-body">
            <div className="experience-card-body-divider"></div>

            <ul className="card-body-description">
              {item.description.map((line, i) => (
                <li key={i}>
                  <span></span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="card-body-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ExperienceItemContainer>
  );
};

export default ExperienceItem;
