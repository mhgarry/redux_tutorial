require('dotenv').config();
const mongoose = require('mongoose');



const MONGO_URI = process.env.MONGO_URI; // Get the URI from the .env file.

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); // Connect to the database.

module.exports = mongoose.connection; // Export the active connection.