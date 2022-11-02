import { compose, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
const middleware = [logger];
const composeEnhancer = compose(applyMiddleware(...middleware));
const store = createStore(rootReducer, undefined, composeEnhancer);
export default store;
