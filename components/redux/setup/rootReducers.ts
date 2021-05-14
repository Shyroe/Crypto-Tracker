import { combineReducers } from 'redux';
import {coinsListReducer, coinSingleReducer} from "../reducers/coinsReducers"

const rootReducer = combineReducers({
   coinsList: coinsListReducer,
   singleCoin: coinSingleReducer,
});

export default rootReducer;
