import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Index from './views';
import store from './store';

const render = Component =>
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<Component />
			</BrowserRouter>
		</Provider>,
		document.getElementById('root')
	);

render(Index);


//edited