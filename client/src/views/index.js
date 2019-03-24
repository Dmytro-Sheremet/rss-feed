import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';

class Index extends Component {
	render() {
		console.log(this.props);
		const { authenticated } = this.props;
		return (
			<Switch>
				<Route path='/login' component={LoginPage} />
				<PrivateRoute path='/' authenticated={authenticated} component={Layout} />
			</Switch>
		);
	}
}

const mapStateToProps = state => {
	return {
		authenticated: state.user.authenticated
	};
};

export default connect(mapStateToProps)(Index);
