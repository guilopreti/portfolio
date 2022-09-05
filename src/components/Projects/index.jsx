import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectsThunk } from "../../store/modules/Projects/thunks";
import FrontCard from "../Cards/Front";
import ProjectsContainer from "./styled";

const Projects = () => {
  const [projectsType, setProjectsType] = useState("front");

  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(setProjectsThunk(projectsType));
  }, [projectsType]);

  return (
    <ProjectsContainer id="projects">
      <h2>PROJETOS</h2>
      <ul>
        {projects.map(
          ({
            id,
            title,
            description,
            img_url,
            preview_url,
            code_url,
            techs,
          }) => {
            return (
              <FrontCard
                key={id}
                title={title}
                description={description}
                img_url={img_url}
                preview_url={preview_url}
                code_url={code_url}
                techs={techs}
              />
            );
          }
        )}
      </ul>
    </ProjectsContainer>
  );
};

export default Projects;
