import { combineReducers } from 'redux';
import postReducer from "./postReducer";
import loadingReducer from 'daniel-common/reducers/loadingReducer';

const rootReducer = combineReducers({
    post: postReducer,
    loading : loadingReducer
});

export default rootReducer;