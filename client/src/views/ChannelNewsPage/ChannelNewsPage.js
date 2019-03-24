import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItemNews } from '../../actions/itemActions';

class ChannelNewsPage extends Component {
	componentDidMount() {
		console.log(this.props);
		this.props.getItemNews(this.props.match.params.id);
	}

	render() {
		const { itemNews } = this.props.item;

		return (
			<ul className='list-group'>
				{itemNews.map(({ title, link }) => (
					<li
						className='list-group-item shadow mb-2 text-secondary'
						key={link}
						// onClick={() => this.props.history.push(`/channel-news/${_id}`)}
					>
						<a href={link} target='blank'>
							{title}
						</a>
					</li>
				))}
			</ul>
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
	{ getItemNews }
)(ChannelNewsPage);
