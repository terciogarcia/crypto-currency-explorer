import { CardContent } from '@mui/material';
import { useState } from 'react';
import {
  CoinInfo, CoinInfoText, CoinInfoTitle, CoinTitle, CoinImage, CoinCard, CoinImageContainer,
} from './CoinListItem.styles';
import { Coin } from '../../../interfaces/coin';

interface CoinListItemProps {
  coin: Coin;
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

        <CoinInfo>
          <CoinInfoTitle>Current price</CoinInfoTitle>
          <CoinInfoText>{`$${coin.current_price}`}</CoinInfoText>
        </CoinInfo>

        <CoinInfo>
          <CoinInfoTitle>Highest price (24h)</CoinInfoTitle>
          <CoinInfoText>{`$${coin.high_24h}`}</CoinInfoText>
        </CoinInfo>

        <CoinInfo>
          <CoinInfoTitle>Lowest price (24h)</CoinInfoTitle>
          <CoinInfoText>{`$${coin.low_24h}`}</CoinInfoText>
        </CoinInfo>

        <CoinInfo>
          <CoinInfoTitle>Price variation (24h)</CoinInfoTitle>
          <CoinInfoText color={coin.price_change_percentage_24h < 0 ? 'error.main' : 'success.main'}>
            {`${coin.price_change_percentage_24h}%`}
          </CoinInfoText>
        </CoinInfo>

      </CardContent>
    </CoinCard>
  );
}

export default CoinListItem;
