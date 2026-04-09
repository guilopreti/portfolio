import { MdWorkOutline } from "react-icons/md";
import { BsMortarboardFill } from "react-icons/bs";
import { PiMedalLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import ExperienceContainer from "./styled";
import { useSelector } from "react-redux";
import ExperienceItem from "../ExperienceItem";

const Experience = () => {
  const [tab, setTab] = useState("work");
  const [items, setItems] = useState([]);

  const experience = useSelector((state) => state.experience);

  useEffect(() => {
    setItems(
      tab === "work" ? experience["workItems"] : experience["educationItems"],
    );
  }, [tab]);

  return (
    <ExperienceContainer id="experience" $tab={tab}>
      <div className="experience-top-border"></div>

      <div className="experience-section-blob"></div>

      <section className="experience-content">
        <div className="experience-header-div">
          <span>Trajetória</span>
          <h2>
            Experiência & <span>Formação</span>
          </h2>
          <p>
            Minha jornada profissional e acadêmica — clique em cada item para
            ver os detalhes.
          </p>
        </div>

        <div className="experience-tab-div">
          <div>
            <button className="work-tab-button" onClick={() => setTab("work")}>
              <MdWorkOutline size={17} />
              Experiência Profissional
            </button>
            <button
              className="education-tab-button"
              onClick={() => setTab("education")}
            >
              <BsMortarboardFill size={17} /> Formação Acadêmica
            </button>
          </div>
        </div>

        <div className="experience-timeline-div">
          <div className="vertical-line-div"></div>

          <ul className="experience-timeline-list">
            {items.map((item) => (
              <ExperienceItem
                key={item.id}
                item={item}
                accentColor={tab === "work" ? "#00e5d4" : "#7c3aed"}
              />
            ))}
          </ul>
        </div>

        {tab === "education" && (
          <div className="toeic-badge-container">
            <div className="toeic-badge-icon">
              <PiMedalLight size={18} />
            </div>

            <div className="toeic-badge-texts">
              <p>Certificação TOEIC — Inglês Avançado (C1)</p>
              <p>Pontuação total de 955 pts (Listening: 495 · Reading: 460)</p>
            </div>

            <div className="toeic-badge-level">Nível C1</div>
          </div>
        )}
      </section>
    </ExperienceContainer>
  );
};

export default Experience;
