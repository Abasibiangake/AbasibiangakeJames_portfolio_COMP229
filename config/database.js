let atlasDB ="mongodb+srv://myappuser:mVikgxpldHVqAIiP@cluster-comp228-lab2.3lkwebx.mongodb.net/credentialsDB?retryWrites=true&w=majority";

// Database setup and import from mongoose the module installed
let mongoose = require('mongoose');

//load and export modules as function
module.exports = function(){

    mongoose.connect(atlasDB);
    //get connection
    let mongodb = mongoose.connection;
    //incase of error write error message to console
    mongodb.on('error', console.error.bind(console, 'Error Connection:'));
    //incase of success, then open connection and display message.
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })
    return mongodb;
}