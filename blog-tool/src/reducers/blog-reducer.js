import { actionTypes } from '../actions/blogActionTypes'

export const PREVIEW_MODE = 'PREVIEW_MODE';
export const BLOG_VIEW_MODE = 'BLOG_VIEW_MODE';
export const ADMIN_MODE = 'ADMIN_MODE';

const initialState = {
    mode: PREVIEW_MODE,   //"preview", "blogView"
    entries: [],    //Blog Entries


    //Workflow 2
    id: 0, //Currently viewed blog in blogView
    page: 0, //currently viewed page in preview    
}

export const blogReducer = (state = initialState, action) => {
    console.log("Blog Reducer State", state);
    console.log("Blog Reducer Action", action);
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
        case actionTypes.ADD_BLOG_DONE:
        case actionTypes.EDIT_BLOG_REQUEST:
        case actionTypes.EDIT_BLOG_DONE:
            return state;

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
        case actionTypes.ENTER_ADMIN:
            return {
                ...state,
                mode: ADMIN_MODE,
            }

        case actionTypes.CHANGE_PAGE:
            if (action.newPage * 5 > state.entries.length)
                return state;
            else
                return {
                    ...state,
                    page: Number(action.newPage),
                }

        default:
            return state;
    }
}