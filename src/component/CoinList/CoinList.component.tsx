import { Coin } from '../../interfaces/coin';
import CoinListItem from './CoinListItem';

interface CoinListProps {
  coins: Coin[];
}

function CoinList({ coins }: CoinListProps) {
  return (
    <div>
      {
        coins.map((coin) => (
          <CoinListItem key={coin.id} coin={coin} />
        ))
      }
    </div>
  );
}

export default CoinList;
