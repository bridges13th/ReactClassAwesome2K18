import { actionTypes } from './blogActionTypes';


export const editBlogActionCreator = blogId => ({type: actionTypes.EDIT_BLOG , blogId});

export const saveBlogRequestActionCreator = blog => ({ type: actionTypes.SAVE_BLOG_REQUEST, blog });
export const saveBlogDoneActionCreator = blog => ({ type: actionTypes.SAVE_BLOG_DONE, blog });


export const saveBlog = blog => {
    return dispatch => {
        dispatch(saveBlogRequestActionCreator(blog));
        return fetch('http://localhost:3050/blogEntries/' + encodeURIComponent(blog.id),
            {
                method: 'PUT',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(
                    {
                    id: blog.id,
                    title: blog.title,
                    body: blog.body,
                    published: blog.published
                }),        
            })
            .then(blog => dispatch(saveBlogDoneActionCreator(blog)))
    };
}