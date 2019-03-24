export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = name => {
	return {
		type: LOGIN,
		payload: {
			name
		}

	};
};

export const logout = () => {
	return {
		type: LOGOUT
	};
};
