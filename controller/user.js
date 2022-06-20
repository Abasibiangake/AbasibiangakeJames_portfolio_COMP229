// Create a reference to the model, hence no need to import mongoose.
let userModel = require('../models/user');

//req = get info, res= send info
module.exports.userList = function(req, res, next){
    //outputs all the documents in the collection in an array
    //has two object - one for error(err) and the other for success(userList)
    userModel.find( (err, userList)=>{
        if(err){
            return console.error(err);
        }
        else{
            console.log(userList);
            //send data from atlas db to the webpage
            //use "user" and not "user" because the
            // render goes into the route folder
            res.render(
                'user/list', 
                { 
                  title: 'Users Database List',
                  UserList: userList
                }
              );
        }

    })    

}

//req to read info from browser
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id; //parameter to read is id, the read id is assigned to new id

    userModel.findById(id, (err, userToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('user/add_edit', {
                title: 'Edit User', 
                user: userToEdit
            })
        }
    });
}
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedUser = userModel({
        _id: req.body.id,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });

    // console.log(updatedUser);

    userModel.updateOne({_id: id}, updatedUser, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/user/list');
        }
    });
    
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    userModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/user/list');
        }
    });
}



module.exports.displayAddPage = (req, res, next) => {
    let newUser = userModel();

    res.render('user/add_edit', {
        title: 'Add a new User',
        user: newUser
    })          
}

module.exports.processAddPage = (req, res, next) => {

    let newUser = userModel({
        _id: req.body.id,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
        
    });

    userModel.create(newUser, (err, user) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(user);
            res.redirect('/user/list');
        }
    });

}


