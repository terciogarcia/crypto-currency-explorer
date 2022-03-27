import axios from 'axios';
import { BASE_API_URL } from './constants';

export function getCoinList() {
    return axios.get(`${BASE_API_URL}/coins/markets`);
}

export function getCoinDetails(coindId: string) {
    return axios.get(`${BASE_API_URL}/coins/${coindId}`);
}