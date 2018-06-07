import { actionTypes } from './blogActionTypes';

export const removeBlogRequestActionCreator = blogId => ({
    type: actionTypes.REMOVE_BLOG_REQUEST, blogId 
});

export const removeBlogDoneActionCreator = blogId => ({
    type: actionTypes.REMOVE_BLOG_DONE, blogId
});

export const removeBlog = blogId => {
    return dispatch => {
        dispatch(removeBlogRequestActionCreator(blogId));
        return fetch('http://localhost:3050/blogEntries/' + encodeURIComponent(blogId), {
            method: 'DELETE',
        })
        .then(blogId => dispatch(removeBlogDoneActionCreator(blogId)));
    };
};