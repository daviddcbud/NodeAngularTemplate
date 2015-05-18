/*jshint node: true */
var express = require('express');
var mongoose = require('mongoose');
process.env.MODE = process.env.MODE || 'development';
var config = require('./config/settings')(),
    db = mongoose.connect(config.db),
    Book = require('./models/bookModel'),

    bodyParser = require('body-parser'),

    app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/serverViews');
app.use(express.static('public'));
var port = process.env.PORT || 3000,
    security = require('./security/config')(),
    passport = require('passport'),
    session = require('express-session'),
    uid = require('node-uuid');
app.use(session({
    genid: function (req) {
        return uid.v1(); // use UUIDs for session IDs
    },
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.get('/auth/windowslive',
        passport.authenticate('windowslive', { scope: ['wl.signin', 'wl.basic'] }));


app.get('/auth/callback', passport.authenticate('windowslive', { failureRedirect: '/login' }),
        function (req, res) {
        res.redirect('/');
    });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
 
  
var bookRouter = require('./routes/router')(Book);
app.use('/api/Books', bookRouter);

app.get('/api/photo', function (req, res) {
    var photo = null;
    console.log('user is ' + req.user);
	if (req.user) {
        photo = req.user.photo;
	}
	res.json(photo);
});

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function () {
	console.log('running on port', port);
});

