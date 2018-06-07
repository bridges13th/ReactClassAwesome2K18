import { actionTypes } from '../actions/blogActionTypes';

export const enterBlogViewActionCreator = (mode,id) => ({ type: actionTypes.LOAD_ALL_BLOGS_REQUEST });
export const enterPreviewActionCreator = mode => ({ type: actionTypes.LOAD_ALL_BLOGS_DONE, mode }); 

const PREVIEW_MODE = 'PREVIEW_MODE';
const BLOG_VIEW_MODE = 'BLOG_VIEW_MODE';

export const changeBlogView = postId =>{
    enterBlogViewActionCreator(BLOG_VIEW_MODE, postId);
}

export const changePreview = () =>{
    enterPreviewActionCreator(BLOG_VIEW_MODE);
}