// STORE
import { combineReducers, legacy_createStore } from "redux";
import players from "../reducer/players";
import filters from "../reducer/filters";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(
  combineReducers({ players, filters }),
  composeEnhancer
);

export default store;
