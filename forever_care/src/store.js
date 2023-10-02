import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from 'redux-thunk'
import {reducer as ServiceReducer}  from "./reduxService/reducer";
import { reducer as AuthReducer } from "./reduxAuth/reducer";

const rootReducer=combineReducers({
ServiceReducer,
AuthReducer})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));