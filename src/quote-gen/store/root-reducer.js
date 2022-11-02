import { combineReducers } from "redux";
import { reducer } from "./data/data.reducer";
const rootReducer = combineReducers({ data: reducer });
export default rootReducer;
