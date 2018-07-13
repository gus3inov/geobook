import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

// const enhancer = applyMiddleware(devToolsEnhancer(), thunk);

const store = createStore(reducer);

export default store
