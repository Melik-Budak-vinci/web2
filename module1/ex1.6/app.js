var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');
const { count, countReset } = require('console');

var app = express();
let countroute={};
app.use((req, res, next) => {

    const key = `${req.method} ${req.path}`;
    if(countroute[key]){
        countroute[key]++;
    }else{
        countroute[key] = 1
    }

    let str = "";
    console.log(JSON.stringify(countroute))
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
