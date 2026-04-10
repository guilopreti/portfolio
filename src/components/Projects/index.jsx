import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectsThunk } from "../../store/modules/Projects/thunks";
import BackCard from "../Cards/Back";
import FrontCard from "../Cards/Front";
import FullStackCard from "../Cards/FullStack";
import ProjectsContainer from "./styled";

const Projects = () => {
  const [projectsType, setProjectsType] = useState("all");
  const dispatch = useDispatch();

  const projects = useSelector((state) => state.projects);
  const [projectsCount, setProjectsCount] = useState({
    all: 0,
    front: 0,
    back: 0,
    fullstack: 0,
  });
  const [visibleLimit, setVisibleLimit] = useState(6);

  useEffect(() => {
    if (projectsType === "all" && projects.length > 0) {
      setProjectsCount({
        all: projects.length,
        front: projects.filter(
          ({ type }) => type === "frontend" || type === "front",
        ).length,
        back: projects.filter(
          ({ type }) => type === "backend" || type === "back",
        ).length,
        fullstack: projects.filter(({ type }) => type === "fullstack").length,
      });
    }
  }, [projects, projectsType]);

  const changeProjects = (type) => {
    dispatch(setProjectsThunk(type));
    setProjectsType(type);
    setVisibleLimit(6);
  };

  useEffect(() => {
    dispatch(setProjectsThunk(projectsType));
  }, []);

  return (
    <ProjectsContainer id="projects" projects={projectsType}>
      <div className="projects-section-divider"></div>

      <div className="projects-content">
        <div className="projects-header-div">
          <span>Portfólio</span>
          <h2>
            Meus <span>Projetos</span>
          </h2>
          <p>
            Uma seleção dos projetos que desenvolvi — do Front End ao Back End,
            passando pelas soluções Full Stack.
          </p>
        </div>

        <div className="tab-buttons-div">
          <button className="button-all" onClick={() => changeProjects("all")}>
            Todos
            <span>{projectsCount.all}</span>
          </button>
          <button
            className="button-front"
            onClick={() => changeProjects("front")}
          >
            Front End
            <span>{projectsCount.front}</span>
          </button>
          <button
            className="button-back"
            onClick={() => changeProjects("back")}
          >
            Back End
            <span>{projectsCount.back}</span>
          </button>
          <button
            className="button-fullstack"
            onClick={() => changeProjects("fullstack")}
          >
            Full Stack
            <span>{projectsCount.fullstack}</span>
          </button>
        </div>

        <div>
          {projects.length ? (
            <>
              <ul>
                {projects
                  .slice(0, visibleLimit)
                  .map((project) =>
                    project.type === "frontend" ? (
                      <FrontCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        img_url={project.img_url}
                        preview_url={project.preview_url}
                        code_url={project.code_url}
                        techs={project.techs}
                      />
                    ) : project.type === "backend" ? (
                      <BackCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        code_url={project.code_url}
                        techs={project.techs}
                      />
                    ) : project.type === "fullstack" ? (
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
                    ) : null,
                  )}
              </ul>
              {visibleLimit < projects.length && (
                <div className="load-more-container">
                  <button onClick={() => setVisibleLimit((prev) => prev + 6)}>
                    Ver mais projetos
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="loading-div" />
          )}
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
