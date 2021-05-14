import { useEffect } from 'react';
import Coin from '../components/layout/main/Coin';
import CoinAppBar from '../components/layout/navigation/CoinAppBar';
import {useAppDispatch} from "../components/redux/setup/hooks"
import {coinSingle} from "../components/redux/actions/coinsActions"

export default function SingleCoin() {
    const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(coinSingle(window.location.pathname.slice(1)) as any)
  }, []);
  return (
    <>
      <CoinAppBar title={window.location.pathname.slice(1)} />
      <Coin />
    </>
  );
}
