import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { giftReducer } from './reducers/gift-reducer'

export const GiftStore = createStore(giftReducer, composeWithDevTools(applyMiddleware(thunk)));