// dont have to use mongoose for a mongo project like this b/c will organize itself
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
	email:{
		type: String,
		// boolean
		unique: true,
		// when saved into db, saved as lowercase format
		lowercase: true
	},
	password: String
});

// tabel name is user and uses userSchema as outline
let model = mongoose.model('user', userSchema)
// what will be returned to us is the model, so when saved data, we can pass the model
// show what model looks like then do the operations
module.exports = model;