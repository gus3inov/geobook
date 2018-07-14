import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const enhancer = applyMiddleware(thunk);

const store = createStore(reducer, enhancer);

export default store
