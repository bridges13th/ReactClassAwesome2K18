import { actionTypes } from '../actions/giftActionTypes'

export const refreshTitleRequestActionCreator = () => ({ type: actionTypes.REFRESH_TITLE_REQUEST });
export const refreshTitleDoneActionCreator = event => ({ type: actionTypes.REFRESH_TITLE_DONE, event });

export const editTitleActionCreator = () => ({type: actionTypes.EDIT_TITLE});
export const saveTitleRequestActionCreator = event => ({ type: actionTypes.SAVE_TITLE_REQUEST, event });
export const saveTitleDoneActionCreator = () => ({ type: actionTypes.SAVE_TITLE_DONE });

const giftListNameURL = 'http://localhost:3050/gift_tool_options/1';

const GIFT_LIST_NAME_OPTION_ID = 1;
const GIFT_LIST_NAME_OPTION_NAME = 'gift_list_name';


export const refreshTitle = () => {
    return dispatch => {                 
        dispatch(refreshTitleRequestActionCreator());
        return fetch(giftListNameURL)
            .then(res => res.json())
            .then(eventTitle => dispatch(refreshTitleDoneActionCreator(eventTitle.option_value)));
    };
}

export const saveTitle = event => {
    console.log('saveTitle:', event);
    return dispatch => {
        dispatch(saveTitleRequestActionCreator(event));
        return fetch(giftListNameURL,
            {
                method: 'PUT',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify({
                    id: GIFT_LIST_NAME_OPTION_ID,
                    option_name: GIFT_LIST_NAME_OPTION_NAME,
                    option_value: event
                }),        
            })
            .then(res => res.json())
            .then(event => dispatch(saveTitleDoneActionCreator(event)))
            .then(() => refreshTitle()(dispatch));
    };
}