// import uuid from 'uuid';

import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_ITEM_NEWS } from '../actions/itemActions';

const initialState = {
	items: [],
	itemNews: [],
	loading: false
};

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_ITEMS:
			return {
				...state,
				items: payload.items,
				loading: false
			};
		case GET_ITEM_NEWS:
			return {
				...state,
				itemNews: payload.itemNews,
				loading: false
			};
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter(item => item._id !== payload)
			};

		case ADD_ITEM:
			return {
				...state,
				items: [payload.items, ...state.items]
			};

		case ITEMS_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
}
