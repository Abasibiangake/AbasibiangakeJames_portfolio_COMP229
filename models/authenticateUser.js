// Database setup and import from mongoose the module installed
let mongoose = require('mongoose');
let crypto = require('crypto');

//create my model class
let authenticateUserModel = mongoose.Schema(
    {
        email: String,
        password: {
            type:String,
            //using custom validator to check the length of the password
            validate: [(password) => {
                return password && password.length > 3;
            }, "Password should be longer than 3"]
        },
        username: {
            type: String, 
            unique:true,
            required: "Username is required",
            trim:true
        },

        //add attribute to intensify encryption, used to make unique a 
        //password even if it is the same password used by another user
        //e.g Abass and John can have a unique password "happy", using 
        //salt gives them a different encryption to differentiate them
        salt: {
            type: String
        },


        created: {
            type:Date,
            default:Date.now
        }
        
    },
    {
        collection: "loginuser"
    }
);

//convert the password entered by the user to an encrypted value for password
authenticateUserModel.pre('save', function(next) {
    if (this.password) {
        this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

authenticateUserModel.pre('save', function(next) {
    console.log("Details are saved for user of username '" + this.username + "'. " )
});


authenticateUserModel.methods.hashPassword = function(password) {
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

authenticateUserModel.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

//export modules to allow other modules to use it.
module.exports = mongoose.model("logincredentialDB", authenticateUserModel);