import { combineReducers } from 'redux';
import postReducer from "./postReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
    post: postReducer,
    loading : loadingReducer 
});

export default rootReducer;