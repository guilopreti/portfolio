import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectsThunk } from "../../store/modules/Projects/thunks";
import BackCard from "../Cards/Back";
import FrontCard from "../Cards/Front";
import FullStackCard from "../Cards/FullStack";
import ProjectsContainer from "./styled";

const Projects = () => {
  const [projectsType, setProjectsType] = useState("front");

  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects);

  const changeProjects = (type) => {
    dispatch(setProjectsThunk(type));
    setProjectsType(type);
  };

  useEffect(() => {
    dispatch(setProjectsThunk("front"));
  }, []);

  return (
    <ProjectsContainer id="projects" projects={projectsType}>
      <h2>PROJETOS</h2>
      {projects.length > 0 && (
        <div className="buttons-div">
          <button
            className="button-front"
            onClick={() => changeProjects("front")}
          >
            Front End
          </button>
          <button
            className="button-back"
            onClick={() => changeProjects("back")}
          >
            Back End
          </button>
          <button
            className="button-fullstack"
            onClick={() => changeProjects("fullstack")}
          >
            Full Stack
          </button>
        </div>
      )}
      <div>
        {projects.length ? (
          <ul>
            {projects.map((project) =>
              projectsType === "front" ? (
                <FrontCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  img_url={project.img_url}
                  preview_url={project.preview_url}
                  code_url={project.code_url}
                  techs={project.techs}
                />
              ) : projectsType === "back" ? (
                <BackCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  code_url={project.code_url}
                  techs={project.techs}
                />
              ) : projectsType === "fullstack" ? (
                <FullStackCard
                  key={project.id}
                  title={project.title}
                  img_url={project.img_url}
                  preview_url={project.preview_url}
                  front_description={project.front_description}
                  back_description={project.back_description}
                  front_code_url={project.front_code_url}
                  back_code_url={project.back_code_url}
                  front_techs={project.front_techs}
                  back_techs={project.back_techs}
                  both_techs={project.both_techs}
                />
              ) : (
                false
              )
            )}
          </ul>
        ) : (
          <div className="loading-div" />
        )}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
