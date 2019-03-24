import React, { Component } from 'react';
import { logout } from '../../actions/loginActions';
import { connect } from 'react-redux';

class Header extends Component {
	logout = () => this.props.logout();

	render() {
		const { userName } = this.props;

		return (
			<nav className='navbar bg-secondary text-white-50 '>
				<div className='container'>
					<p>{userName}</p>
					<button
						onClick={this.logout}
						className='btn btn btn-warning my-2 my-sm-0 text-white font-weight-bold'
						type='submit'
					>
						Logout
					</button>
				</div>
			</nav>
		);
	}
}

const mapStateToProps = state => ({
	userName: state.user.userName
});

export default connect(
	mapStateToProps,
	{ logout }
)(Header);
