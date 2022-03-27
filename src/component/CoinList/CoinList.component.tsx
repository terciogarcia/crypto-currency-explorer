import { Coin } from '../../interfaces/coin';
import CoinListItem from './CoinListItem';

interface CoinListProps {
  coins: Coin[];
}

function CoinList({ coins }: CoinListProps) {
  return (
    <>
      {
        coins.map((coin) => (
          <CoinListItem key={coin.id} coin={coin} />
        ))
      }
    </>
  );
}

export default CoinList;
