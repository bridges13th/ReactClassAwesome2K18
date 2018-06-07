import KeyMirror from 'key-mirror'

export const actionTypes = KeyMirror({
    //Init
    LOAD_ALL_OPTIONS_REQUEST: null,
    LOAD_ALL_OPTIONS_DONE: null,
    LOAD_ALL_GIFTS_REQUEST: null,
    LOAD_ALL_GIFTS_DONE: null,
    //Options
    REFRESH_OPTIONS_REQUEST: null,
    REFRESH_OPTIONS_DONE: null,
    //Title 
    REFRESH_TITLE_REQUEST: null,
    REFRESH_TITLE_DONE: null,
    EDIT_TITLE: null,
    SAVE_TITLE_REQUEST: null,
    SAVE_TITLE_DONE: null,
    //Gifts
    REFRESH_GIFT_REQUEST: null,
    REFRESH_GIFT_DONE: null,
    ADD_GIFT_REQUEST: null,
    ADD_GIFT_DONE: null,
    DELETE_GIFT_REQUEST: null,
    DELETE_GIFT_DONE: null,
});