// Database setup and import from mongoose the module installed
let mongoose = require('mongoose');

//create my model class
let userModel = mongoose.Schema(
    {
        email: String,
        password: String,
        username: String
        
    },
    {
        collection: "user"
    }
);

//export modules to allow other modules to use it.
module.exports = mongoose.model("credentialDB", userModel);