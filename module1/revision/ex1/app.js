var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films')

var app = express();
var count = 0;
app.use((req,res,next)=>{
    count++
    console.log(req.method, req.path,' counter : ',count);
    next();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films',filmsRouter)

module.exports = app;
