import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectsThunk } from "../../store/modules/Projects/thunks";
import BackCard from "../Cards/Back";
import FrontCard from "../Cards/Front";
import ProjectsContainer from "./styled";

const Projects = () => {
  const [projectsType, setProjectsType] = useState("front");

  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(setProjectsThunk(projectsType));
  }, []);

  return (
    <ProjectsContainer id="projects" projects={projectsType}>
      <h2>PROJETOS</h2>
      {projects.length > 0 && (
        <div className="buttons-div">
          <button
            className="button-front"
            onClick={() => setProjectsType("front")}
          >
            Front End
          </button>
          <button
            className="button-back"
            onClick={() => setProjectsType("back")}
          >
            Back End
          </button>
          <button
            className="button-full-stack"
            onClick={() => setProjectsType("full-stack")}
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
              ) : (
                <BackCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  code_url={project.code_url}
                  techs={project.techs}
                />
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
