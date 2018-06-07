import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { blogReducer } from './reducers/blog-reducer'

export const BlogStore = createStore(blogReducer, composeWithDevTools(applyMiddleware(thunk)));