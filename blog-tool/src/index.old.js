//Generic imports
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//Generic custom imports
import './index.css'

//Gift registry imports
import { GiftReducer } from './reducers/gift-reducer'
import { GiftRegistry } from './component/gift-registry/GiftRegistry'


//Calculator imports
import { CalcReducer } from './reducers/calc-reducer'
import * as CalcContainer from './component/CalcContainer'

// const appStore = createStore(CalcReducer);
// const giftStore = createStore(GiftReducer);

const appStore = createStore(CalcReducer, composeWithDevTools());
const giftStore = createStore(GiftReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={appStore}>
        <React.Fragment>
            <CalcContainer.CalcToolContainer />
            <CalcContainer.CalcHistoryContainer />
            <GiftRegistry store={giftStore} />
        </React.Fragment>
    </Provider>,
    document.querySelector('#root')
);
