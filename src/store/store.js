/**
 * Created by nlbang on 6/20/2017.
 */
import hello from '../reducers/hello'
import login from '../reducers/login'
import data from '../reducers/api'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const reducer = combineReducers({
    hello,
    login,
    data,
    form: formReducer
});

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));
/*const store =createStore(reducer, applyMiddleware(...middleware));*/

export default store;

