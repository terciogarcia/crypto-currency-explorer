import { Tabs, Tab } from '@mui/material';
import { useContext, useState } from 'react';
import CoinChart from '../../CoinChart';
import { CoinDetailsContext } from '../CoinDetails.context';
import TabContent from '../TabContent';
import { ChartTabContainer } from './ChartTab.styles';

function ChartsTab() {
  const coin = useContext(CoinDetailsContext);
  const [chartPeriodDays, setChartPeriodDays] = useState<number | 'max'>(1);

  if (!coin) return null;

  return (
    <TabContent>
      <ChartTabContainer>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={chartPeriodDays}
          onChange={(_event, value) => setChartPeriodDays(value)}
          aria-label="Vertical tabs example"
        >
          <Tab label="1 Day" value={1} />
          <Tab label="14 Days" value={14} />
          <Tab label="1 Month" value={30} />
          <Tab label="3 Months" value={90} />
          <Tab label="1 Year" value={365} />
          <Tab label="Max" value="max" />
        </Tabs>

        <CoinChart days={chartPeriodDays} coinId={coin.id} />
      </ChartTabContainer>

    </TabContent>
  );
}

export default ChartsTab;
