import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'

//Import 
//Blog Store! 

import { BlogToolContainer} from './component/BlogContainer'
import { BlogStore} from './blog-tool-store'
// import { GiftStore} from './gift-tool-store'



ReactDOM.render(
    <Provider store={BlogStore}>
            <BlogToolContainer />
    </Provider>,

    document.querySelector('#root')
);