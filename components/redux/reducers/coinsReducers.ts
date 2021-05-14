import { ACTION_CONSTANTS } from "../constants/coinsConstants"

const initialState = {
    loading: true,
    coins: [],
    coin: {}
}

export const coinsListReducer = (state = initialState.coins, action) => {
    switch (action.type) {
      case ACTION_CONSTANTS.COINS_LIST_REQUEST:
        return { loading: true };
      case ACTION_CONSTANTS.COINS_LIST_SUCCESS:
        return { loading: false, coins: action.payload };
      case ACTION_CONSTANTS.COINS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const coinSingleReducer = (state = initialState.coin, action) => {
    switch (action.type) {
      case ACTION_CONSTANTS.COIN_SINGLE_REQUEST:
        return { loading: true };
      case ACTION_CONSTANTS.COIN_SINGLE_SUCCESS:
        return { loading: false, coin: action.payload };
      case ACTION_CONSTANTS.COIN_SINGLE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  