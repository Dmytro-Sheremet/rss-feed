import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class List extends Component {
	componentDidMount() {
		this.props.getItems();
	}

	onDeleteClic = id => {
		this.props.deleteItem(id);
	};

	render() {
		const { items } = this.props.item;
		return (
			<ul className='list-group'>
				{items.map(({ _id, name }) => (
					<li className='list-group-item shadow mb-2 text-secondary' key={_id}>
						<button onClick={this.onDeleteClic.bind(this, _id)} type='button' className='close'>
							<span>&times;</span>
						</button>

						{name}
					</li>
				))}
			</ul>
		);
	}
}

List.propTypes = {
	getItem: PropTypes.func.isRequired,
	item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	item: state.item
});

export default connect(
	mapStateToProps,
	{ getItems, deleteItem }
)(List);
