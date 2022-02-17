import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    usersPage: usersReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;