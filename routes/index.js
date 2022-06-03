const express = require('express');
const router = express.Router();
// const app = express();
// const port = 3000;
// app.set('view engine', 'ejs')

//routes
router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/project', projectsPage); 
router.get('/service', servicePage);
router.get('/contact', contactPage);

//controller
function homePage (req, res, next) {
  res.render('index', {title: "AJ Portfolio HomePage"});
}

function aboutPage (req, res, next) {
    res.render('pages/about', {title: "AJ Portfolio AboutPage"});
}

function projectsPage (req, res, next) {
    res.render('pages/project', {title: "AJ Portfolio Project and Services Page"});
}
function servicePage (req, res, next) {
    res.render('pages/service', {title: "AJ Portfolio Project and Services Page"});
}
function contactPage (req, res, next) {
    res.render('pages/contact', {title:"AJ Portfolio Contact Me Page"});
}


//set the port and runs the app
// app.listen(port, () => {
//     console.log(`App listening at port ${port}`)
// })

module.exports = router;