require("dotenv").config();
const express = require("express");
const db = require("./config/connection");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8888;
db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${process.env.PORT || 8888}!`);
	});
});
