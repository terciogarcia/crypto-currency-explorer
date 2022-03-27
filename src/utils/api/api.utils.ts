import axios from 'axios';
import { Coin } from '../../interfaces/coin';
import { BASE_API_URL, COMMOM_PARAMS } from './constants';

export async function getCoinList(): Promise<Coin[]> {
  const result = await axios.get(`${BASE_API_URL}/coins/markets?${COMMOM_PARAMS}`);
  return result.data;
}

export function getCoinDetails(coindId: string) {
  return axios.get(`${BASE_API_URL}/coins/${coindId}`);
}
