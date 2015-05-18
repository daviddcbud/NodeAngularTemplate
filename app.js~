var express= require('express');
var mongoose= require('mongoose');

var config= require('./config/settings')();

process.env.MODE=process.env.MODE || 'development';
var db=mongoose.connect(config.db);



var Book=require('./models/bookModel');

var bodyParser=require('body-parser');


var app= express();
app.set('view engine','ejs');
app.set('views',__dirname + '/serverViews');
app.use(express.static('public'));
var port= process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
var bookRouter= require('./routes/router')(Book);
app.use('/api/Books', bookRouter);

app.get('/', function(req,res) {
	res.render('index');

});

app.listen(port, function() {
	console.log('running on port', port);
});

