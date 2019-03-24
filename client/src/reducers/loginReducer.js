import { LOGIN, LOGOUT } from '../actions/loginActions';

const initialState = {
	authenticated: false
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case LOGIN:
			return {
				...state,
				authenticated: true,
				userName: payload.name
			};
		case LOGOUT:
			return {
				...state,
				authenticated: false
			};

		default:
			return state;
	}
}
