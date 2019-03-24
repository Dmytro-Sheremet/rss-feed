//Item Model
const Item = require('../models/Item');
const Feed = require('feed-to-json-promise');

const Services = {};

Services.getChannels = (req, res) => {
	Item.find()
		.sort({ date: -1 })
		.then(items => res.json(items));
};

Services.getChannelNews = (req, res) => {
	Item.findById(req.query.id)
		.then(item => {
			const feed = new Feed();
			return feed.load(item.name);
		})
		.then(news => res.json(news.items))
		.catch(err => {
			res.status(404).json({ success: false });
		});
};

Services.addChannel = (req, res) => {
	//create item with chema
	const newItem = new Item({
		name: req.body.name
	});
	//save to DB
	newItem.save().then(item => res.json(item));
};

Services.deleteChannel = (req, res) => {
	Item.findById(req.params.id)
		.then(item => {
			item.remove().then(() => {
				res.json({ success: true });
			});
		})
		.catch(err => {
			res.status(404).json({ success: false });
		});
};

module.exports = Services;
