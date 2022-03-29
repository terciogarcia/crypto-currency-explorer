import { useContext } from 'react';
import { Currency } from '../../../enums/Currency';
import DataRow from '../../DataRow';
import { CoinDetailsContext } from '../CoinDetails.context';
import TabContent from '../TabContent';
import { getValueColor, formatDate } from './PriceTab.utils';

function PricesTab() {
  const coin = useContext(CoinDetailsContext);

  if (!coin) return null;

  const priceChange24h = coin.market_data.price_change_percentage_24h;
  const priceChange7days = coin.market_data.price_change_percentage_7d;
  const priceChange14days = coin.market_data.price_change_percentage_14d;
  const priceChangeMonth = coin.market_data.price_change_percentage_30d;
  const priceChange2months = coin.market_data.price_change_percentage_60d;
  const priceChange200days = coin.market_data.price_change_percentage_200d;
  const priceChangeYear = coin.market_data.price_change_percentage_1y;
  const highestPrice24h = coin.market_data.high_24h?.[Currency.usd];
  const lowestPrice24h = coin.market_data.low_24h?.[Currency.usd];
  const highestPriceAllTime = coin.market_data.ath?.[Currency.usd];
  const highestPriceAllTimeDate = coin.market_data.ath_date?.[Currency.usd];
  const lowestPriceAllTime = coin.market_data.atl?.[Currency.usd];
  const lowestPriceAllTimeDate = coin.market_data.atl_date?.[Currency.usd];

  return (
    <TabContent>
      {Boolean(priceChange24h) && <DataRow textColor={getValueColor(priceChange24h)} title="Price variantion (24h)" text={`${priceChange24h}%`} />}
      {Boolean(priceChange7days) && <DataRow textColor={getValueColor(priceChange7days)} title="Price variantion (7 days)" text={`${priceChange7days}%`} />}
      {Boolean(priceChange14days) && <DataRow textColor={getValueColor(priceChange14days)} title="Price variantion (14 days)" text={`${priceChange14days}%`} />}
      {Boolean(priceChangeMonth) && <DataRow textColor={getValueColor(priceChangeMonth)} title="Price variantion (30 days)" text={`${priceChangeMonth}%`} />}
      {Boolean(priceChange2months) && <DataRow textColor={getValueColor(priceChange2months)} title="Price variantion (60 days)" text={`${priceChange2months}%`} />}
      {Boolean(priceChange200days) && <DataRow textColor={getValueColor(priceChange200days)} title="Price variantion (200 days)" text={`${priceChange200days}%`} />}
      {Boolean(priceChangeYear) && <DataRow textColor={getValueColor(priceChangeYear)} title="Price variantion (year)" text={`${priceChangeYear}%`} />}
      {Boolean(highestPrice24h) && <DataRow title="Highest price (24h)" text={`$${highestPrice24h}`} />}
      {Boolean(lowestPrice24h) && <DataRow title="Lowest price (24h)" text={`$${lowestPrice24h}`} />}
      {Boolean(highestPriceAllTime) && <DataRow title="Highest price (all-time)" text={`$${highestPriceAllTime}`} />}
      {Boolean(highestPriceAllTimeDate) && <DataRow title="Highest price all-time date" text={formatDate(highestPriceAllTimeDate)} />}
      {Boolean(lowestPriceAllTime) && <DataRow title="Lowest price (all-time)" text={`$${lowestPriceAllTime}`} />}
      {Boolean(lowestPriceAllTimeDate) && <DataRow title="Lowest price all-time date" text={formatDate(lowestPriceAllTimeDate)} />}
    </TabContent>
  );
}

export default PricesTab;
