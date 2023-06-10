const mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
	username: {
		strung: true,
		required: true,
		trim: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ["Admin", "User", "Guest"],
	},
});

module.exports = mongoose.model("User", UserSchema);
