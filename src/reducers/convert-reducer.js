import { CONVERT_CURRENCIES } from './../actions';
const INITIAL_STATE = [];


export default function (state = INITIAL_STATE, action) {
	if (action.type === CONVERT_CURRENCIES) {
		return action.payload.data;
	}
	return state;
}