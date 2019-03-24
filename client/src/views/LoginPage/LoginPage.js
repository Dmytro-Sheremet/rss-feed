import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';

class LoginPage extends Component {
	state = {
		name: ''
	};

	onChange = e => {
		this.setState({ name: e.target.value });
	};

	login = e => {
		e.preventDefault();
		new Promise(res => res(this.props.login(this.state.name))).then(() =>
			this.props.history.push('/')
		);
	};
	render() {
		return (
			<div className='container'>
				<input type='text' onChange={this.onChange} />

				<button onClick={this.login} type='submit'>
					Login
				</button>
			</div>
		);
	}
}

export default connect(
	null,
	{ login }
)(LoginPage);
