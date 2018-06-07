import { actionTypes } from '../actions/giftActionTypes'

export const refreshGiftRequestActionCreator = () => ({ type: actionTypes.REFRESH_GIFT_REQUEST });
export const refreshGiftDoneActionCreator = (gifts) => ({ type: actionTypes.REFRESH_GIFT_DONE, gifts });
export const addGiftRequestActionCreator = () => ({ type: actionTypes.ADD_GIFT_REQUEST, });
export const addGiftDoneActionCreator = gift => ({ type: actionTypes.ADD_GIFT_DONE, gift });
export const delGiftRequestActionCreator = () => ({ type: actionTypes.DELETE_GIFT_REQUEST })
export const delGiftDoneActionCreator = id => ({ type: actionTypes.DELETE_GIFT_DONE, id })

const collectionURL = 'http://localhost:3050/gifts';

const getElementURL = (id) => {
    return `${collectionURL}/${encodeURIComponent(id)}`;
}

export const refreshGifts = () => {
    return dispatch => {
        dispatch(refreshGiftRequestActionCreator());
        return fetch(collectionURL)
            .then(res => res.json())
            .then(gifts => dispatch(refreshGiftDoneActionCreator(gifts)));
    };
};

export const addGift = gift => {
    return dispatch => {
        dispatch(addGiftRequestActionCreator());
        return fetch(collectionURL,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(gift),
            })
            .then(res => res.json())
            .then(gift => dispatch(addGiftDoneActionCreator(gift)))            
    };
};

export const deleteGift = id => {
    console.log("deleteGift", id);
    return dispatch => {
        dispatch(delGiftRequestActionCreator());
        return fetch(getElementURL(id),
            {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(() => dispatch(delGiftDoneActionCreator(id)))
    };
};