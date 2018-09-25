import API from "../API/API";
import * as Constants from "./constants";

const postsBeginRequest = () => ({ type: Constants.POSTS_BEGIN_REQUEST });
const postsEndRequest = () => ({ type: Constants.POSTS_END_REQUEST });
const postSucessRequest = (posts) => ({
    type: Constants.POSTS_SUCCESS,
    posts
});

export const loadAllPosts = () => {
    return (dispatch) => {
        dispatch(postsBeginRequest());
        return API.loadAllPosts()
            .then(posts => {
                dispatch(postSucessRequest(posts));
            });
    }
}