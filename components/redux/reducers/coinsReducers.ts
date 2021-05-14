import { ACTION_CONSTANTS } from "../constants/coinsConstants"
import { ICoins } from "../setup/types";

const initialState: ICoins = {
  loading: true,
  coins: [],
  coin: {},
  error: ''
}

export const coinsListReducer = (state: ICoins = initialState, action: any): ICoins => {
  switch (action.type) {
    case ACTION_CONSTANTS.COINS_LIST_REQUEST:
      return { ...state, loading: true };
    case ACTION_CONSTANTS.COINS_LIST_SUCCESS:
      return { ...state, loading: false, coins: action.payload };
    case ACTION_CONSTANTS.COINS_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const coinSingleReducer = (state: ICoins = initialState, action: any): ICoins => {
  switch (action.type) {
    case ACTION_CONSTANTS.COIN_SINGLE_REQUEST:
      return { ...state, loading: true };
    case ACTION_CONSTANTS.COIN_SINGLE_SUCCESS:
      return { ...state, loading: false, coin: action.payload };
    case ACTION_CONSTANTS.COIN_SINGLE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
