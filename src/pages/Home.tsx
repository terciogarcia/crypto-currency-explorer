import { useEffect, useState } from 'react';
import CoinList from '../component/CoinList';
import LoadingIndicator from '../component/LoadingIndicator';
import { Coin } from '../interfaces/coin';
import { getCoinList } from '../utils/api';

function Home() {
  const [coins, setCoins] = useState<Coin[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getCoinList()
      .then(setCoins)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {coins && <CoinList coins={coins} />}
      {isLoading && <LoadingIndicator />}
    </>
  );
}

export default Home;
