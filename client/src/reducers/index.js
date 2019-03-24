import { combineReducers } from 'redux';

import itemReducer from './itemReducer';
import loginReducer from './loginReducer';

export default combineReducers({
	item: itemReducer,
	user: loginReducer
});
