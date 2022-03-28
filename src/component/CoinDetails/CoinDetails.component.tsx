import { Button, CardActions, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Currency } from '../../enums/Currency';
import { Languages } from '../../enums/Languages';
import { Coin } from '../../interfaces/Coin';
import DataRow from '../DataRow';
import { CoinDetailsProvider } from './CoinDetails.context';
import {
  CoinDetailsCard, CoinDetailsHeader, CoinDetailsImage, CoinDetailsTitle,
} from './CoinDetails.styles';
import CoinDetailTabs from './CoinDetailsTabs';

interface CoinDetailsProps {
  coin: Coin;
}

function CoinDetails({ coin }: CoinDetailsProps) {
  const navigate = useNavigate();

  return (
    <CoinDetailsCard>
      <CardContent>
        <CoinDetailsHeader>
          <CoinDetailsImage src={coin.image.thumb} />
          <CoinDetailsTitle>{coin.name}</CoinDetailsTitle>
        </CoinDetailsHeader>

        <DataRow title="Current Price" text={`$${coin.market_data.current_price[Currency.usd]}`} />

        {
          coin.description[Languages.en] // eslint-disable-next-line react/no-danger
          && <p dangerouslySetInnerHTML={{ __html: coin.description[Languages.en] }} />
        }

        <CoinDetailsProvider value={coin}>
          <CoinDetailTabs />
        </CoinDetailsProvider>
      </CardContent>

      <CardActions>
        <Button onClick={() => navigate('/')} color="primary">
          Go back
        </Button>
      </CardActions>
    </CoinDetailsCard>
  );
}

export default CoinDetails;
