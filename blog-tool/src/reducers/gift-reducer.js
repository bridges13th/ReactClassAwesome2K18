import { actionTypes } from '../actions/giftActionTypes'
import { GiftToolOptions } from '../models/GiftToolOptions'

const OPTION_TITLE_INDEX = 0;
// const OPTION_SORT_INDEX = 1;
// const OPTION_CURRENCY_INDEX = 2;

const initialState = {
    //Gift Tool Options
    options: [],

    //Tool State Data
    editingEvent: false,

    //Gift List
    gifts: []
};

const getSortedGifts = (gifts, options) => {
    // const gtOptions = new GiftToolOptions(options);
    // const method = gtOptions.getDefaultSort();
    const method = new GiftToolOptions(options).getDefaultSort();
    switch (method) {

        case 'id':
        case 'name':
        case 'price':
            return gifts.sort((giftA, giftB) => { return (giftA[method] > giftB[method]) ? 1:-1 });
        default:
            return gifts;
    }
}

export const giftReducer = (state = initialState, action) => {
    console.log("gift reducer state", state);
    console.log("gift reducer action", action);
    switch (action.type) {
        //Init
        case actionTypes.LOAD_ALL_OPTIONS_REQUEST:
            return { ...state, loading: true, }

        case actionTypes.LOAD_ALL_OPTIONS_DONE:
            return {
                ...state,
                loading: false,
                options: action.options,
            }

        case actionTypes.LOAD_ALL_GIFTS_REQUEST:
            return { ...state, loading: true };

        case actionTypes.LOAD_ALL_GIFTS_DONE:
            return {
                ...state,
                loading: false,
                gifts: getSortedGifts(action.gifts, state.options),
            };

        //Options
        case actionTypes.REFRESH_OPTIONS_REQUEST:
            return { ...state, loading: true };

        case actionTypes.REFRESH_OPTIONS_DONE:
            return {
                ...state,
                loading: false,
                options: action.options,
            }

        //Title
        case actionTypes.REFRESH_TITLE_REQUEST:
            return { ...state, loading: true, };

        case actionTypes.REFRESH_TITLE_DONE:
            return {
                ...state,
                loading: false,
                event: action.event,
            };

        case actionTypes.EDIT_TITLE:
            return { ...state, editingEvent: true, };

        case actionTypes.SAVE_TITLE_REQUEST:
            return {
                ...state,
                editingEvent: false,
                loading: true,
                event: action.event,
            };

        case actionTypes.SAVE_TITLE_DONE:
            return { ...state, loading: false, };

        //Gifts
        case actionTypes.REFRESH_GIFT_REQUEST:
        case actionTypes.ADD_GIFT_REQUEST:
        case actionTypes.DELETE_GIFT_REQUEST:
            return { ...state, loading: true };

        case actionTypes.REFRESH_GIFT_DONE:
            return {
                ...state,
                loading: false,
                gifts: getSortedGifts(action.gifts, state.options),
            };

        case actionTypes.ADD_GIFT_DONE:

            return {
                ...state,
                loading: false,
                gifts: getSortedGifts(state.gifts.concat(action.gift), state.options),
            };

        case actionTypes.DELETE_GIFT_DONE:
            return {
                ...state,
                loading: false,
                gifts: getSortedGifts(state.gifts.filter(gift => gift.id !== action.id), state.options),
            };

        default:
            return state;
    }
};