var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({

	windowsLiveId : { type : String},
	photo: { type: String},
	displayName: {type: String}
});

module.exports = mongoose.model('User', user);

