// req is first parameter of the function
exports.signup = function(req, res){
	console.log(req.body)
	// users will handle the req part, so we only need to worry about what we send back
	// res.send("user auth!");
	var email = req.body.email;
	var password = req.body.password;
}