import { ACTION_CONSTANTS } from "../constants/coinsConstants"
import AXIOS from "../../utils/axios"
import { Dispatch } from "redux"

export const listCoins = (pageNum) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ACTION_CONSTANTS.COINS_LIST_REQUEST });

    const { data } = await AXIOS.get(`/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNum}&sparkline=false`);

    dispatch({
      type: ACTION_CONSTANTS.COINS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTION_CONSTANTS.COINS_LIST_FAIL,
      payload: error.response,
    });

  }
};

export const coinSingle = (id) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ACTION_CONSTANTS.COIN_SINGLE_REQUEST });

    const { data } = await AXIOS.get(`/api/v3/coins/${id}?sparkline=true`);

    dispatch({
      type: ACTION_CONSTANTS.COIN_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACTION_CONSTANTS.COIN_SINGLE_FAIL,
      payload: error.response,
    });

  }
};
