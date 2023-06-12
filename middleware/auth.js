const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.registerUser = async (req, res) => {
	try {
		//input data
		const { username, email, password, role } = req.body;
		// check if user exists
		const existingUser = await User.findOne();
		if (existingUser) {
			return res
				.status(400)
				.json({ message: "This user is already registered" });
		}
		let hashedPassword;
		try {
			hashedPassword = await bcrypt.hash(password, 10);
		} catch (err) {
			return res.status(500).json({
				success: false,
				message:
					`Something went wrong creating encrypting ${password}` + err.message,
			});
		}
		const User = new User({
			username,
			email,
			password: hashedPassword,
			role,
		});
		return res.status(200).json({
			success: true,
			message: "User created successfully",
		});
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: `Something went wrong creating user` + err.message,
		});
	}
};

exports.loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		//validation
		if (!email || !password) {
			return res.status(400).json({
				success: false,
				message: "Please provide a valid email and password",
			});
		}
		//check if user exists
		let User = await User.findOne({ email });
		if (!User) {
			return res.status(401).json({
				success: false,
				message: "Invalid credentials",
			});
		}

		const payload = {
			email: User.email,
			id: User._id,
			role: User.role,
		};
		//verify password and generate token
		if (await bcrypt.compare(password, User.password)) {
			// if password matches create token
			let token = jwt.sign(payload, process.env.JWT_SECRET, {
				expiresIn: "4h",
			});
			User = User.toObject();
			User.token = token;

			User.password = undefined;
			const options = {
				expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true,
			};
			res.cookie("token", token, options).status(200).json({
				success: true,
				token,
				User,
				message: "User is logged in successfully",
			});
		} else {
			return res.status(403).json({
				success: false,
				message: "Invalid credentials",
			});
		}
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: `Something went wrong logging in user` + err.message,
		});
	}
};
