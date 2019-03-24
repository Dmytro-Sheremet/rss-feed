import React, { Component } from 'react';
import ChannelsPage from '../ChannelsPage';
import ChannelNewsPage from '../ChannelNewsPage';
import Header from '../Header';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class Layout extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className='container'>
					<Switch>
						<Route path='/channels' component={ChannelsPage} />
						<Route path='/channel-news/:id' component={ChannelNewsPage} />
						<Redirect from='/' to='/channels' />
					</Switch>
				</div>
			</div>
		);
	}
}
