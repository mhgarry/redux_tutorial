const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authCheck = (req, res, next) => {
	try {
		const token = req.body.token || req.cookies.token;
		if (!token) {
			return res.status(401).json({
				success: false,
				message: "You need to login first",
			});
		}

		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = decoded;
			console.log(req.user);
		} catch (err) {
			return res.status(401).json({
				success: false,
				message: "You need to login first",
			});
		}
		next();
	} catch (err) {
		return res.status(401).json({
			success: false,
			message: "AUthentication error occurred",
		});
	}
};

exports.isUser = (req, res, next) => {
	try {
		console.log(req.user);
		if (req.user.role !== "user") {
			return res.status(401).json({
				success: false,
				message: "You are not authorized to access this section of the website",
			});
		}
		next();
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
	}
};

exports.isAdmin = (req, res, next) => {
	try {
		if (req.user.role !== "admin") {
			return res.status(401).json({
				success: false,
				message: "You are not authorized to access this section of the website",
			});
		}
		next();
	} catch (err) {
		return res.status(500).json({
			success: false,
			message: "Something went wrong",
		});
	}
};
