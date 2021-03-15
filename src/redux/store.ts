
import { Store, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './reducers';

export const initialStore: Store = createStore(rootReducer, applyMiddleware(logger));