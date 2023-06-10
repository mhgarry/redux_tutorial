const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
const User = mongoose.model("User", UserSchema);
module.exports = User;
