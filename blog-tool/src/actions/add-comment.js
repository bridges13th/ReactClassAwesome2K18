import { blogActionTypes } from './blogActionTypes';

export const addCommentRequestActionCreator = () => ({ type: blogActionTypes.ADD_COMMENT_REQUEST });
export const addCommentDoneActionCreator = blog => ({ type: blogActionTypes.ADD_COMMENT_DONE, blog });

export const addComment = comment => {
    return dispatch => {
        dispatch(addCommentRequestActionCreator());
        return fetch('http://localhost:3050/blogEnteries/', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment),
        })
            .then(res => res.json())
            .then(blog => dispatch(addCommentDoneActionCreator(comment)));
    };
};