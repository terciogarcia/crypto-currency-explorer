import { CardContent } from '@mui/material';
import { useState } from 'react';
import {
  CoinTitle, CoinImage, CoinCard, CoinImageContainer,
} from './CoinListItem.styles';
import { CoinSummary } from '../../../interfaces/CoinSummary';
import DataRow from '../../DataRow';

interface CoinListItemProps {
  coin: CoinSummary;
}

function CoinListItem({ coin }: CoinListItemProps) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleOnMouseOver = () => setIsMouseOver(true);
  const handleOnMouseOut = () => setIsMouseOver(false);

  return (
    <CoinCard
      elevation={isMouseOver ? 4 : 1}
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <CardContent>
        <CoinImageContainer>
          <CoinImage src={coin.image} alt={`${coin.name} image`} />
        </CoinImageContainer>

        <CoinTitle>{`(${coin.symbol}) ${coin.name}`}</CoinTitle>

        <DataRow title="Current price" text={`$${coin.current_price}`} />
        <DataRow title="Highest price (24h)" text={`$${coin.high_24h}`} />
        <DataRow title="Lowest price (24h)" text={`$${coin.low_24h}`} />
        <DataRow
          title="Price variation (24h)"
          textColor={coin.price_change_percentage_24h < 0 ? 'error.main' : 'success.main'}
          text={`${coin.price_change_percentage_24h}%`}
        />

      </CardContent>
    </CoinCard>
  );
}

export default CoinListItem;
