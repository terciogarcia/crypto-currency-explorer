import axios from 'axios';
import { Coin } from '../../interfaces/coin';
import { BASE_API_URL, COIN_PAGE_SIZE, COMMOM_PARAMS } from './constants';

export async function getCoinList(page = 1): Promise<Coin[]> {
  const extrasParams = `page=${page}&per_page=${COIN_PAGE_SIZE}`;

  const result = await axios.get(`${BASE_API_URL}/coins/markets?${COMMOM_PARAMS}&${extrasParams}`);
  return result.data;
}

export function getCoinDetails(coindId: string) {
  return axios.get(`${BASE_API_URL}/coins/${coindId}`);
}
