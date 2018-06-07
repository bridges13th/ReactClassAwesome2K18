export const LoadAllOptionsRequestActionCreator = () => ({ type: 'LOAD_ALL_OPTIONS_REQUEST' });
export const LoadAllOptionsDoneActionCreator = options => ({ type: 'LOAD_ALL_OPTIONS_DONE', options });
export const LoadAllGiftsRequestActionCreator = () => ({ type: 'LOAD_ALL_GIFTS_REQUEST' });
export const LoadAllGiftsDoneActionCreator = gifts => ({ type: 'LOAD_ALL_GIFTS_DONE', gifts });

const optionsURL = 'http://localhost:3050/gift_tool_options';
const collectionURL = 'http://localhost:3050/gifts';

export const loadAllOptions = () => {
    return dispatch => {
        dispatch(LoadAllOptionsRequestActionCreator());
        return fetch(optionsURL)
            .then(res => res.json())
            .then(options => dispatch(LoadAllOptionsDoneActionCreator(options)));
    };
}

export const loadAllGifts = () => {
    return dispatch => {
        dispatch(LoadAllGiftsRequestActionCreator());
        return fetch(collectionURL)
            .then(res => res.json())
            .then(gifts => dispatch(LoadAllGiftsDoneActionCreator(gifts)));
    };
};