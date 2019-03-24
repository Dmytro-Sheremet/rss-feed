import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='navbar bg-secondary text-white-50 '>
					<div class='container'>
						<form className='form-inline'>
							<input
								className='form-control mr-sm-2'
								type='search'
								placeholder='Search'
								aria-label='Search'
							/>
							<button
								className='btn btn btn-warning my-2 my-sm-0 text-white font-weight-bold'
								type='submit'
							>
								Search
							</button>
						</form>
					</div>
				</nav>
			</>
		);
	}
}
