import { actionTypes } from '../actions/blogActionTypes'

const PREVIEW_MODE = 'PREVIEW_MODE';
const BLOG_VIEW_MODE = 'BLOG_VIEW_MODE';

const initialState = {
    mode: '',   //"preview", "blogView"
    entries: [],    //Blog Entries

    //Workflow 1
    blogEntryToEdit: -1,

    //Workflow 2
    id: 0, //Currently viewed blog in blogView
    page: 0, //currently viewed page in preview    
}

export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        //Shared Workflows
        case actionTypes.LOAD_ALL_BLOGS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.LOAD_ALL_BLOGS_DONE:
            return {
                ...state,
                loading: false,
                entries: action.entries,
            }

        //Blog Add/Edit Actions (Workflow 1)
        case actionTypes.ADD_BLOG_REQUEST:
            return {...state };
        case actionTypes.ADD_BLOG_DONE:
            return {...state, entries: state.entries.concat(action.blog)};
        case actionTypes.EDIT_BLOG:
            return { ...state, blogEntryToEdit: action.blogId };
        case actionTypes.SAVE_BLOG_REQUEST:
            return { ...state };
        case actionTypes.SAVE_BLOG_DONE:
            return { ...state, blogEntryToEdit: -1 };
        case actionTypes.REMOVE_BLOG_REQUEST:
            return { ...state }
        case actionTypes.REMOVE_BLOG_DONE:
            return { ...state, entries: state.entries.filter(e => e.id !== action.blogId)}
        

        //Blog View Actions (Workflow 2)
        case actionTypes.ENTER_BLOG_VIEW:
            return {
                ...state,
                mode: BLOG_VIEW_MODE,
                id: action.id,
            };
        case actionTypes.ENTER_PREVIEW:
            return {
                ...state,
                mode: PREVIEW_MODE,
                page: 0,
            };

        default:
            return state;
    }
}