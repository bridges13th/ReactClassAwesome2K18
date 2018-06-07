import { actionTypes } from './blogActionTypes';

export const collectionURL = 'http://localhost:3050/blogEntries/';

export const loadEntriesRequestActionCreator = () => ({ type: actionTypes.LOAD_ALL_BLOGS_REQUEST });
export const loadEntriesDoneActionCreator = entries => ({ type: actionTypes.LOAD_ALL_BLOGS_DONE, entries });

export const loadAllBlogs = () => {
    return dispatch => {
        dispatch(loadEntriesRequestActionCreator());
        return fetch(collectionURL)
            .then(res => res.json())
            .then(entries => dispatch(loadEntriesDoneActionCreator(entries)));
    };
}
