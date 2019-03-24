import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import './style.css';

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
				<div class='login-page'>
					<div class='form'>
						<form class='register-form'>
							<input type='text' placeholder='name' />
							<input type='password' placeholder='password' />
							<input type='text' placeholder='email address' />
							<button>create</button>
							<p class='message'>
								Already registered? <a href='#'>Sign In</a>
							</p>
						</form>
						<form class='login-form'>
							<input type='text' placeholder='username' />
							<input type='password' placeholder='password' />
							<button>login</button>
							<p class='message'>
								Not registered? <a href='#'>Create an account</a>
							</p>
						</form>
					</div>
				</div>

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
