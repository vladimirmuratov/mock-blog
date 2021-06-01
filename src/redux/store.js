import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {articleReducer} from "./article/articleReducer";
import {userReducer} from "./user/userReducer";

const rootReducer = combineReducers({
    article: articleReducer,
    user: userReducer
})


export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
))