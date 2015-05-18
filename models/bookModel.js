var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookModel = new Schema({

	title : {
		type : String
	},
	author : {
		type : String
	},
	genre : {
		type : Boolean
	},
	read : {
		type : Boolean,
		default : false
	}
});

module.exports = mongoose.model('Book', bookModel);

