import { useEffect, useMemo, useState } from 'react';
import {
  CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Legend, Tooltip,
} from 'recharts';
import { CoinChartData } from '../../interfaces/CoinChartData';
import { getCoinChart } from '../../utils/api';
import LoadingIndicator from '../LoadingIndicator';
import { ChartContainer } from './CoinChart.styles';

interface CoinChartProps {
  coinId: string;
  days: number | 'max';
}

const formatDateTime = (integerDate: number) => {
  const [date, time] = new Date(integerDate).toISOString().split('T');
  const splitDate = date.split('-');

  return `${splitDate[1]}/${splitDate[2]}/${splitDate[0]} ${time.substring(0, 5)}`;
};

function CoinChart({ coinId, days }: CoinChartProps) {
  const [coinChartData, setCoinChartData] = useState<CoinChartData>();

  useEffect(() => {
    getCoinChart(coinId, days)
      .then(setCoinChartData);
  }, [coinId, days]);

  const formattedChartData = useMemo(() => coinChartData?.prices.map((price) => ({
    date: formatDateTime(price[0]),
    price: price[1],
  })), [coinChartData]);

  if (!formattedChartData) {
    return (<LoadingIndicator />);
  }

  return (
    <ChartContainer>
      <ResponsiveContainer>
        <LineChart width={800} height={300} data={formattedChartData}>
          <Line type="monotone" dataKey="price" dot={false} stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis fontSize="12" dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

export default CoinChart;
