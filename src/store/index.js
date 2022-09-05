import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import techsReducer from "./modules/Techs/reducers";
import projectsReducer from "./modules/Projects/reducers";

const reducers = combineReducers({
  techs: techsReducer,
  projects: projectsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
