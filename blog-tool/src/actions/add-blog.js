import { blogActionTypes } from './blogActionTypes';

export const addBlogRequestActionCreator = () => ({ type: blogActionTypes.ADD_BLOG_REQUEST });
export const addBlogDoneActionCreator = blog => ({ type: blogActionTypes.ADD_BLOG_DONE, blog });

export const addBlog = blog => {
    return dispatch => {
        dispatch(addBlogRequestActionCreator());
        return fetch('http://localhost:3050/blogEnteries/', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog),
        })
            .then(res => res.json())
            .then(blog => dispatch(addBlogDoneActionCreator(blog)));
    };
};