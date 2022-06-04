var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const port = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(__dirname+'/public/'));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
    console.log(`App listening at port ${port}`)
})

module.exports = app;

// const express = require('express');
// const router = express.Router();

// // const app = express();
// // const port = 3000;
// // router.set('view engine', 'ejs')

// //routes
// router.get('/', homePage);
// router.get('/about', aboutPage);
// router.get('/project', projectsPage); 
// router.get('/service', servicePage);
// router.get('/contact', contactPage);

// //controller
// function homePage (req, res, next) {
//   res.render('index', {title: "AJ Portfolio HomePage"});
// }

// function aboutPage (req, res, next) {
//     res.render('pages/about', {title: "AJ Portfolio AboutPage"});
// }

// function projectsPage (req, res, next) {
//     res.render('pages/project', {title: "AJ Portfolio Project and Services Page"});
// }
// function servicePage (req, res, next) {
//     res.render('pages/service', {title: "AJ Portfolio Project and Services Page"});
// }
// function contactPage (req, res, next) {
//     res.render('pages/contact', {title:"AJ Portfolio Contact Me Page"});
// }

// //set the port and runs the app
// // router.listen(port, () => {
// //     console.log(`App listening at port ${port}`)
// // })

// module.exports = router;