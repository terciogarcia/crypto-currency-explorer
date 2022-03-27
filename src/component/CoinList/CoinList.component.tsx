import { Coin } from '../../interfaces/coin';
import { CoinGrid } from './CoinList.styles';
import CoinListItem from './CoinListItem';

interface CoinListProps {
  coins: Coin[];
}

function CoinList({ coins }: CoinListProps) {
  return (
    <CoinGrid>
      {
        coins.map((coin) => (
          <CoinListItem key={coin.id} coin={coin} />
        ))
      }
    </CoinGrid>
  );
}

export default CoinList;
