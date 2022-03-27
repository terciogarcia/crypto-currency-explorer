import { useEffect, useState } from 'react';
import CoinList from '../component/CoinList';
import { Coin } from '../interfaces/coin';
import { getCoinList } from '../utils/api';

function Home() {
  const [coins, setCoins] = useState<Coin[]>();

  useEffect(() => {
    getCoinList()
      .then(setCoins);
  }, []);

  return coins ? <CoinList coins={coins} /> : null;
}

export default Home;
