import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {compose,applyMiddleware,createStore} from 'redux'
import rootReducer from './rootReducer';
const middlewares = [logger,thunk];

const composedEnhancer = compose(applyMiddleware(...middlewares))

const store = createStore(
    rootReducer,
    undefined,
    composedEnhancer
)

export default store