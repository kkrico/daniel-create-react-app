import API from "../API/API";
import * as Constants from "./constants";
import { BeginAjaxCall } from "daniel-common/ajaxStatus/ajaxStatusActions";

const postsSucessRequest = (posts) => ({
    type: Constants.POSTS_SUCCESS,
    posts
});
const postSucessRequest = (post) => ({
    type: Constants.POST_SUCCESS,
    post
});

const limparPost = () => ({
    type: Constants.POST_CLEAN
})

export const loadAllPosts = () => {
    return (dispatch) => {
        dispatch(BeginAjaxCall());
        return API.loadAllPosts()
            .then(posts => {
                dispatch(postsSucessRequest(posts));
            });
    }
}

export const getPost = (id) => {
    return (dispatch) => {
        dispatch(BeginAjaxCall());
        return API.getPost(id)
            .then(post => {
                dispatch(postSucessRequest(post))
            });
    }
}

export const limparPostEdicao = () => {
    return (dispatch) => {
        dispatch(limparPost());
    }
}