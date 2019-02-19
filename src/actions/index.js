import API_KEY from '../currency-api-key';
import axios from 'axios';
const BASE_URL = 'http://apilayer.net/api/'

export const CONVERT_CURRENCIES = 'CONVERT_CURRENCIES';

export const convertCurrencies = (convert) => {
	const url = `${BASE_URL}/convert?access_key=${API_KEY}`
	const param = {
		...convert,
		format: 1
	}
	const request = axios.get(url, param);
	return {
		type: CONVERT_CURRENCIES,
		payload: request
	}
}