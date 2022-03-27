import { Coin } from '../../../interfaces/coin';

interface CoinListItemProps {
    coin: Coin;
}

function CoinListItem({ coin }: CoinListItemProps) {
  return (
    <div>
      Name:
      {' '}
      {coin.name}
    </div>
  );
}

export default CoinListItem;
