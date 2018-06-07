import { actionTypes } from './blogActionTypes';
import {collectionURL} from './add-blog'

export const addCommentRequestActionCreator = () => ({ type: actionTypes.ADD_COMMENT_REQUEST });
export const addCommentDoneActionCreator = blog => ({ type: actionTypes.ADD_COMMENT_DONE, blog });

const getElementURL = (id) => {
    return `${collectionURL}/${encodeURIComponent(id)}`;
}


export const addComment = blog => {
    console.log("addComment", blog);
    return dispatch => {
        dispatch(addCommentRequestActionCreator());
        return fetch(getElementURL(blog.id), { 
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        })
            .then(res => res.json())
            .then(blog => dispatch(addCommentDoneActionCreator(blog)));
    };
};