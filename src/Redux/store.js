import { createStore } from "redux";
import reducer from "./Counter/counterReducer";

const store = createStore(reducer);


export default store;