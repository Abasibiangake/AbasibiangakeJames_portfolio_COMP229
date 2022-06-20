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
            //use "userdb" and not "user" because the
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

// module.exports.displayEditPage = (req, res, next) => {
//     let id = req.params.id;

//     userModel.findById(id, (err, userToEdit) => {
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             //show the edit view
//             res.render('user/add_edit', {
//                 title: 'Edit User', 
//                 user: userToEdit
//             })
//         }
//     });
// }
// module.exports.processEditPage = (req, res, next) => {
//     let id = req.params.id

//     let updatedItem = InventoryModel({
//         _id: req.body.id,
//         item: req.body.item,
//         qty: req.body.qty,
//         status: req.body.status,
//         size : {
//             h: req.body.size_h,
//             w: req.body.size_w,
//             uom: req.body.size_uom,
//         },
//         tags: req.body.tags.split(",").map(word => word.trim())
//     });

//     // console.log(updatedItem);

//     InventoryModel.updateOne({_id: id}, updatedItem, (err) => {
//         if(err)
//         {
//             console.log(err);
//             res.end(err);
//         }
//         else
//         {
//             // console.log(req.body);
//             // refresh the book list
//             res.redirect('/inventory/list');
//         }
//     });
// }
