import { Link } from 'react-router-dom';
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
          <Link to={coin.id} key={coin.id}>
            <CoinListItem coin={coin} />
          </Link>
        ))
      }
    </CoinGrid>
  );
}

export default CoinList;
