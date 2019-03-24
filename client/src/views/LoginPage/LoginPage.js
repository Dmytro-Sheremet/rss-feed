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
		new Promise(res => res(this.props.login(this.state.name))).then(() => this.props.history.push('/'));
	};
	render() {
		return (
			<div>
				<form>
					<div class='form-group'>
						<label for='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							class='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							placeholder='Enter email'
						/>
						>
						<small id='emailHelp' class='form-text text-muted'>
							We'll never share your email with anyone else.
						</small>
					</div>
					<div class='form-group'>
						<label for='exampleInputPassword1'>Password</label>
						<input type='password' class='form-control' id='exampleInputPassword1' placeholder='Password' />>
					</div>
					<div class='form-group form-check'>
						<input type='checkbox' class='form-check-input' id='exampleCheck1' />
						<label class='form-check-label' for='exampleCheck1'>
							Check me out
						</label>
					</div>
					<button type='submit' class='btn btn-primary'>
						Submit
					</button>
				</form>

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
