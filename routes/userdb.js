var express = require('express');
var router = express.Router();

let userController = require('../controller/user');

/* GET home page. */
router.get('/list', userController.userList);

// // Routers for edit
// router.get('/edit/:id', userController.displayEditPage);
// router.post('/edit/:id', userController.processEditPage);

// // Router for delete
// router.get('/delete/:id', userController.performDelete);

// /* GET Route for displaying the Add page - CREATE Operation */
// router.get('/add', userController.displayAddPage);

// /* POST Route for processing the Add page - CREATE Operation */
// router.post('/add', userController.processAddPage);

module.exports = router; //inorder to use router.