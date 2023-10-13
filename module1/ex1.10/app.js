const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const  indexRouter = require('./routes/index');
const  usersRouter = require('./routes/users');
const filmsRouter = require('./routes/films');
const textsRouter = require('./routes/texts');

const  app = express();
const countroute={};
app.use((req, res, next) => {

    const key = `${req.method} ${req.path}`;
    if(countroute[key]){
        countroute[key]+= 1;
    }else{
        countroute[key] = 1
    }
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
app.use('/films',filmsRouter);
app.use('/texts',textsRouter);

module.exports = app;
