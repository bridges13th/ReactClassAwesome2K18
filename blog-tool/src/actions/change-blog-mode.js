import { actionTypes } from '../actions/blogActionTypes';

export const enterBlogViewActionCreator = id => ({ type: actionTypes.ENTER_BLOG_VIEW, id });
export const enterPreviewActionCreator = () => ({ type: actionTypes.ENTER_PREVIEW }); 

const PREVIEW_MODE = 'PREVIEW_MODE';
const BLOG_VIEW_MODE = 'BLOG_VIEW_MODE';

export const changeBlogView = postId =>{
    enterBlogViewActionCreator(postId);
}

export const changePreview = () =>{
    enterPreviewActionCreator();
}