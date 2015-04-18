var express= require('express');
var mongoose= require('mongoose');

var db=mongoose.connect('mongodb://dev:pointe@ds061741.mongolab.com:61741/devtesting');

var Book=require('./models/bookModel');
var bodyParser=require('body-parser');


var app= express();

var port= process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
 
var bookRouter= require('./Routes/bookRouter')(Book);
app.use('/api/Books', bookRouter);

app.get('/', function(req,res) {
	res.send('welcome');

});

app.listen(port, function() {
	console.log('running on port', port);
});

