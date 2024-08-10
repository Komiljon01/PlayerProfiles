// STORE
import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { thunk } from "redux-thunk";
import players from "../reducer/players";
import filters from "../reducer/filters";

const stringMiddleWare = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }

  return next(action);
};

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(
  combineReducers({ players, filters }),
  compose(applyMiddleware(thunk, stringMiddleWare), composeEnhancer)
);

export default store;
