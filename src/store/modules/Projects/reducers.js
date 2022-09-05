import { SET_PROJECTS } from "./actionTypes";

const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return action.projects;

    default:
      return state;
  }
};

export default projectsReducer;
