import { combineReducers } from 'redux';
import postReducer from "./postReducer";
import ajaxStatus from 'daniel-common/ajaxStatus/ajaxStatusReducer';

const rootReducer = combineReducers({
    post: postReducer,
    ajaxStatusCounter : ajaxStatus
});

export default rootReducer;