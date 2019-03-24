import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class Modal extends Component {
	state = {
		modal: true,
		name: ''
	};

	// toggle = () => {
	// 	this.setState({
	// 		modal: !this.state.modal
	// 	});
	// };
	onChange = e => {
		this.setState({ name: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const NewItem = { name: this.state.name };

		//Add item with addItem action
		this.props.addItem(NewItem);
	};

	render() {
		return (
			<div>
				<button
					type='button'
					class='btn btn-warning my-3 font-weight-bold text-white'
					data-toggle='modal'
					data-target='#exampleModal'
				>
					Add New Item
				</button>
				<p className='text-secondary'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae mollitia vero earum laudantium
					rem odio voluptates consequatur reprehenderit aliquid hic adipisci nisi consectetur iste, cumque at neque
					dolore accusamus laboriosam atque quis similique. Aliquid molestias unde blanditiis labore dicta officia
					dolore, reiciendis quam, ullam eligendi eos. Illo, ullam fugiat!
				</p>

				<div class='modal fade' id='exampleModal'>
					<div class='modal-dialog'>
						<div class='modal-content shadow-lg'>
							<div class='input m-3 '>
								{/* INPUT - how to clear input field after submit. problem - 
							when i'm opening modal window second time - there is my previous input value] */}
								<input type='text' class='form-control' placeholder='new item name' onChange={this.onChange} />
								<button
									onClick={this.onSubmit}
									data-dismiss='modal'
									type='submit'
									class='btn btn-warning mt-3 font-weight-bold text-white btn-block'
								>
									submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	item: state.item
});

export default connect(
	mapStateToProps,
	{ addItem }
)(Modal);
