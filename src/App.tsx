import { useEffect, useState } from 'react';
import CoinList from './component/CoinList';
import { Coin } from './interfaces/coin';
import { getCoinList } from './utils/api';

function App() {
  const [coins, setCoins] = useState<Coin[]>();

  useEffect(() => {
    getCoinList()
      .then(setCoins);
  }, []);

  return (
    <div className="App">
      {coins && <CoinList coins={coins} />}
    </div>
  );
}

export default App;
