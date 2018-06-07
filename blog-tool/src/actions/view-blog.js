import { actionTypes } from '../blogentriesActionTypes';

export const loadEntriesRequestActionCreator = () => { type: actionTypes.LOAD_ALL_BLOGS_REQUEST };
export const loadEntriesDoneActionCreator = entries => { type: actionTypes.LOAD_ALL_BLOGS_DONE, entries };

export const loadAll = () => {
    return dispatch => {
        dispatch(loadEntriesRequestActionCreator())
        fetch('http://localhost:3050/blog_entries')
            .then(res => res.json)
            .then(entries => loadEntriesDoneActionCreator(entries));
    };
}
