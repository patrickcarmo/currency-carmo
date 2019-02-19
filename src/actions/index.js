import API_KEY from '../currency-api-key';
import axios from 'axios';
const BASE_URL = 'http://apilayer.net/api/'

export const CONVERT_CURRENCIES = 'CONVERT_CURRENCIES';

export const convertCurrencies = (convert) => {
	const url = `${BASE_URL}/live?access_key=${API_KEY}`
	const param = {
		source: convert.from,
		currencies: convert.to,
		format: 1
	}
	const request = axios.get(url, param);
	return {
		type: CONVERT_CURRENCIES,
		payload: request
	}
}

/*
export const convertCurrencies = (convert) => {
	const url = `${BASE_URL}/live?access_key=${API_KEY}&source=${convert.from}&currencies=${convert.to}`
	const request = axios.get(url);
	return {
		type: CONVERT_CURRENCIES,
		payload: request
	}
}
*/