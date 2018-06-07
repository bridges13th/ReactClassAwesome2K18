const initialState = {
    lastId: 0,
    history: [],
    action: {},
}

const appendCalc = (actions, action) => {
    return actions.concat({ ...action });
}

const deleteCalc = (actions, id) => {
    return actions.filter(action => action.id !== id);
}

export const CalcReducer = (state = initialState, action) => {
    
    console.log(state, action.type, action.value);

    switch (action.type) {
        case 'ADD':
        case 'SUB':
        case 'MUL':
        case 'DIV':
            return {
                ...state,
                lastId: state.lastId + 1,
                history: appendCalc(state.history, { ...action, id: state.lastId + 1 }),
            };
        case 'DEL':
            return {
                ...state,
                history: deleteCalc(state.history, action.value),
            };
        default:
            return state;
    }
}