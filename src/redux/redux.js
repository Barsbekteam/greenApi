import {applyMiddleware, combineReducers, createStore} from "redux";
import {main} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootState = combineReducers({
    main: main
})
export const store = createStore(rootState, composeWithDevTools(applyMiddleware(thunk)))
