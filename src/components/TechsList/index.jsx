import { useSelector } from "react-redux";
import TechsContainer from "./styled";
import TechCategory from "../TechCategory";

const TechsList = () => {
  const techs = useSelector((state) => state.techs);

  return (
    <TechsContainer id="techs">
      <div className="top-border-div"></div>

      <div className="techs-content-div">
        <div className="techs-header-div">
          <span>Habilidades</span>
          <h2>
            Tecnologias & <span>Ferramentas</span>
          </h2>
          <p>
            Tecnologias que utilizo no dia a dia para criar soluções completas,
            do front ao back-end.
          </p>
        </div>

        <ul className="tech-category-list">
          {Object.entries(techs).map(([categoryName, categoryTechs]) => {
            const formattedTitle =
              categoryName === "frontend"
                ? "FRONT END"
                : categoryName === "backend"
                  ? "BACK END"
                  : "FERRAMENTAS";

            return (
              <TechCategory
                key={categoryName}
                title={formattedTitle}
                techs={categoryTechs}
                color={
                  categoryName === "frontend"
                    ? "#00e5d4"
                    : categoryName === "backend"
                      ? "#7c3aed"
                      : "#00bcd4"
                }
              />
            );
          })}
        </ul>
      </div>
    </TechsContainer>
  );
};

export default TechsList;
