import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import CoinList from '../component/CoinList';
import LoadingIndicator from '../component/LoadingIndicator';
import { Coin } from '../interfaces/coin';
import { getCoinList } from '../utils/api';

function Home() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCoinPage = async () => {
    try {
      setIsLoading(true);
      const coinPage = await getCoinList(currentPage);

      setCoins([...coins, ...coinPage]);
      setCurrentPage(currentPage + 1);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoinPage();
  }, []);

  return (
    <>
      <CoinList coins={coins} />
      {isLoading && <LoadingIndicator />}
      {coins.length > 0 && !isLoading && (
        <Button
          onClick={fetchCoinPage}
          variant="contained"
          color="primary"
        >
          Load more
        </Button>
      )}
    </>
  );
}

export default Home;
