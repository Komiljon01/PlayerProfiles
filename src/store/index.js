// STORE
import { legacy_createStore } from "redux";
import reducer from "../reducer";

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = legacy_createStore(reducer, composeEnhancer);

export default store;
