import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducers';
const persistConfig = {
    key: 'coinsList',
    storage: storage,
    whiteList: ['coinsList', 'singleCoin']
};
const pReducer = persistReducer(persistConfig, rootReducers);
const middleware = composeWithDevTools(applyMiddleware(logger, thunk))
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);
export { persistor, store };
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
