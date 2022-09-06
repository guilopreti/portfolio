import axios from "axios";
import { setProjects } from "./actions";

export const setProjectsThunk = (type) => (dispatch) => {
  dispatch(setProjects([]));
  setTimeout(
    () =>
      axios
        .get(`https://guilopreti-portfolio.herokuapp.com/api/${type}/newest/`)
        .then((resp) => dispatch(setProjects(resp.data)))
        .catch((err) => console.log(err)),
    1000
  );
};
