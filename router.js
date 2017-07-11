// has all routes that will be hit to send users plaes
// directs data to send to controlers, but first need to send data
const Auth = require('./controllers/auth');
// const User = require('./models/user')
var passportService = require('./services/passport');
var passport = require('passport');

// By default the .authenticate method above wants to make a cookie. Since we’re using jwt, we don’t want a cookie. Hence, we set the first parameter to ‘jwt’ and the second to this: {session: false}. 
var requireAuth = passport.authenticate('jwt', {session: false});

// the app will refer to the express from the index.js
module.exports = function(app){
	// app.get('/', function(req, res){
	// 	res.send("hhhhheyeyeyeyeyooooooo")
	// })
	app.get('/', requireAuth, function(req, res){
		res.send("hhhhheyeyeyeyeyooooooo")
	})

	// Auth is considered an object b/c of the . notation
	app.post('/signup', Auth.signup)
}