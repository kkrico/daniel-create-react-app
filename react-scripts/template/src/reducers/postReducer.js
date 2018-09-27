import * as PostConstants from '../actions/constants';
import initialState from './initialState';

export default function funcionarioReducer(state = initialState.post, action) {

    switch (action.type) {
        case PostConstants.POSTS_SUCCESS:
            return Object.assign({}, state, { posts: action.posts })
        case PostConstants.POST_SUCCESS:
            return Object.assign({}, state, { postParaEdicao: action.post })
        case PostConstants.POST_CLEAN:
            return Object.assign({}, state, { postParaEdicao: {} })
        default:
            return state;
    }
}