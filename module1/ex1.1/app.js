var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');
const { count } = require('console');

var app = express();
let countGet = 0;
let countF = 0;
let countPost = 0;
let countDelete = 0;

app.use((req, res, next) => {

    if(req.method === 'GET' && req.path === '/'){
        countGet++;
    }
    if(req.method === 'GET' && req.path === '/films'){
        countF++;
    } 
    if(req.method === 'POST' && req.path === '/films'){
        countPost++;
    } 
    if(req.method === 'DELETE' && req.path === '/films'){
        countDelete++;
        console.log('zwet'+req.listenerCount('GET'))
    }
       console.log('request counter \n- GET / : '+countGet+'\n- GET /films : '+countF+'\n- POST /films : '+countPost+'\n- DELETE /films :'+countDelete+'\n \n \n') 
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
