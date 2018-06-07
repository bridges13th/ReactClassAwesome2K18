import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'
// import { connect } from './Connect'
import * as CalcActions from '../actions/calc-actions'
import { CalcHistory } from './calculator/CalcHistory'
import { CalcForm } from './calculator/CalcForm'


const reCalc = (actions) => {
    const reducer = (result, action) => {
        switch (action.type) {
            case 'ADD':
                return result + action.value;
            case 'SUB':
                return result - action.value;
            case 'MUL':
                return result * action.value;
            case 'DIV':
                return result / action.value;
            default:
                return result;
        }
    }

    return actions.reduce(reducer, 0);
}

const mapStateToPropsForCalc = state => {
    return { result: reCalc(state.history) };
};

const mapDispatchToPropsForCalc = dispatch => bindActionCreators({
    add: CalcActions.addActionCreator,
    sub: CalcActions.subActionCreator,
    mul: CalcActions.mulActionCreator,
    div: CalcActions.divActionCreator,
}, dispatch);


const mapStateToPropsForHistory = state => {
    return { actions: state.history };
};

const mapDispatchToPropsForHistory = dispatch => bindActionCreators({
    del: CalcActions.delActionCreator,
}, dispatch);

export const CalcHistoryContainer = connect(mapStateToPropsForHistory, mapDispatchToPropsForHistory)(CalcHistory);
export const CalcToolContainer = connect(mapStateToPropsForCalc, mapDispatchToPropsForCalc)(CalcForm);