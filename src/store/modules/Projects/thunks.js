import axios from "axios";
import { setProjects } from "./actions";

export const setProjectsThunk = (type) => (dispatch) => {
  dispatch(setProjects([]));
  axios
    .get(`${import.meta.env.VITE_API_URL}/${type}/newest/`)
    .then((resp) => dispatch(setProjects(resp.data)))
    .catch((err) => console.log(err));
};
