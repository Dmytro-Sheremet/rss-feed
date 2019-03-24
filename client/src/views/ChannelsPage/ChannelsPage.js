import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem, addItem } from '../../actions/itemActions';

class ChannelsPage extends Component {
	state = {
		name: ''
	};
	onChange = e => {
		this.setState({ name: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const NewItem = { name: this.state.name };

		//Add item with addItem action
		this.props.addItem(NewItem);
		this.setState({ name: '' });
	};
	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClic = (e, id) => {
		e.stopPropagation();
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props.item;
		return (
			<div>
				<input type='text' className='form-control' placeholder='new item name' onChange={this.onChange} />
				<button
					onClick={this.onSubmit}
					type='submit'
					className='btn btn-warning mt-3 font-weight-bold text-white btn-block'
				>
					Add Item
				</button>
				<ul className='list-group'>
					{items.map(({ _id, name }) => (
						<li
							className='list-group-item shadow mb-2 text-secondary'
							key={_id}
							onClick={() => this.props.history.push(`/channel-news/${_id}`)}
						>
							<button onClick={e => this.onDeleteClic(e, _id)} type='button' className='close'>
								<span>&times;</span>
							</button>

							{name}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		item: state.item
	};
};

export default connect(
	mapStateToProps,
	{ getItems, deleteItem, addItem }
)(ChannelsPage);
