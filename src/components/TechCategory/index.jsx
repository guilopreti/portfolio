import Tech from "../Tech";
import TechCategoryContainer from "./styled";

const TechCategory = ({ title, color, techs }) => {
  return (
    <TechCategoryContainer $color={color}>
      <div className="category-header-div">
        <div></div>
        <span>{title}</span>
        <div className="div-dois"></div>
      </div>

      <ul>
        {techs.map((tech) => {
          return <Tech name={tech.name} icon={tech.icon} />;
        })}
      </ul>
    </TechCategoryContainer>
  );
};

export default TechCategory;
