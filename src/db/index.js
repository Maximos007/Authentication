const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://auth:8aTiYVE9I21Ym1gG@cluster0.fmhyy.mongodb.net/dbbsb?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	});

mongoose.Promise = global.Promise;

module.exports = mongoose;