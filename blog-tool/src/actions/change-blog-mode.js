import { actionTypes } from '../actions/blogActionTypes';

export const enterBlogViewActionCreator = id => ({ type: actionTypes.ENTER_BLOG_VIEW, id });
export const enterPreviewActionCreator = () => ({ type: actionTypes.ENTER_PREVIEW }); 
export const enterAdminActionCreator = () => ({ type: actionTypes.ENTER_ADMIN }); 
