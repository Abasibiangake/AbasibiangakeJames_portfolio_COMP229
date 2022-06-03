// const express = require('express')
// const app = express()
// const port = 3000
// app.set('view engine', 'ejs')
// const user = {
//     firstName: 'Abasibiangake',
//     lastName: 'James',
//     admin: false,
// }
// app.get('/', (req, res) => {
//     res.render('pages/index', {
//         user
//     })
// })

// app.get('/about', (req, res) => {
//     res.render('pages/about', {
//         articles: posts
//     })
// })

// app.get('/project', (req, res) => {
//     res.render('pages/project', {
//         articles: posts
//     })
// })

// app.get('/service', (req, res) => {
//     res.render('pages/service', {
//         articles: posts
//     })
// })

// app.get('/contact', (req, res) => {
//     res.render('pages/contact', {
//         articles: posts
//     })
// })

// app.listen(port, () => {
//   console.log(`App listening at port ${port}`)
// })


const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs')

//routes
app.get('/', homePage);
app.get('/about', aboutPage);
app.get('/project', projectsPage); 
app.get('/service', servicePage);
app.get('/contact', contactPage);

//controller
function homePage (req, res, next) {
  res.render('pages/index', {title: "AJ Portfolio HomePage"});
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
app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})

//module.exports = router;