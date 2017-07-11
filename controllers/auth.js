// allows user obj to be brought in; the ../ means go up a folder
const User = require('../models/user');

// req is first parameter of the function
exports.signup = function(req, res){
	console.log(req.body)
	// users will handle the req part, so we only need to worry about what we send back
	// res.send("user auth!");
	var email = req.body.email;
	var password = req.body.password;
	
	// if statement that checks if there isnt an email or passowrd
	// since not a function, just gets used as goes down
	if(!email || !password){
		return res.status(418).send({error: 'You need to put in an email and/or password'});
	}

	// findOne allows us to find one instance in db; can do findAll if want all
	// should be checking for email that currently matches
	// funciton is a callback. first is the err/condition, and second is success w/ data we work w/
	// if there is an email there, ...
	User.findOne({email: email}, function(err, existingUser){
		// if some rand err, ...
		if(err){
			return next(err);
		}
		// if there is already a user, ...
		if (existingUser){
			// i'm a teapot. 
			return res.status(418).send('This email is already in use');
		}
		let user = new User({
			// email will be same email as above
			email: email,
			password: password
		});

		user.save(function(err){
			if(err){
				return next(err)
			}
			res.json({success:true})
		})
	})

}