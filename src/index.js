/**
 * Created by nlbang on 6/20/2017.
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './components/App'

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);