import * as PostConstants from '../actions/constants';
import initialState from './initialState';

export default function funcionarioReducer(state = initialState.post, action) {

    switch (action.type) {
        case PostConstants.POSTS_SUCCESS:
            return action.posts;
        default:
            return state;
    }
}