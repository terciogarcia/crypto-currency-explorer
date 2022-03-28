import axios from 'axios';
import { CoinSummary } from '../../interfaces/CoinSummary';
import { BASE_API_URL, COIN_PAGE_SIZE } from './constants';

export async function getCoinList(page = 1): Promise<CoinSummary[]> {
  const params = `page=${page}&per_page=${COIN_PAGE_SIZE}&vs_currency=usd`;

  const result = await axios.get(`${BASE_API_URL}/coins/markets?${params}`);
  return result.data;
}

export async function getCoinDetails(coindId: string) {
  const result = await axios.get(`${BASE_API_URL}/coins/${coindId}`);
  return result.data;
}
