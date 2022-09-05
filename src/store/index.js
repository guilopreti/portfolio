import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";

import techsReducer from "./modules/Techs/reducers";

const reducers = combineReducers({ techs: techsReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
