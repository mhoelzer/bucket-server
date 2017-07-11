var passport = require('passport');
var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
// set up options for jwt strategy
var jwtOptions = {
	// where to get a token from in a req. heere it is staken from header called uathorization
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	// need to get a secret key from a config file
	secretOrKey: config.secret
};

// create jwt strategy
// payload parameter is the decoded jwt token. It corresponds to data gleaned from the createUserToken function in auth.js from sub & iat. That is the payload.
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	// look through all users and find user with the given
	User.findById(payload.sub, function(err, user){ 
		// err will be populated if search fails
		if(err){
			return done(err, false);
		}
		// if find user, do done callback. authenticates it
		if(user){
			done(null, user);
		} else {
			// if we cant find user w/ id, call done function without user obj
			done(null, false);
		}
	});
});
passport.use(jwtLogin);