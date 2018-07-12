'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    hotel_routes = require('./routes/hotel.routes'),
    hotel_extra_routes = require('./routes/hotelExtra.routes.js'),
    port = (process.env.PORT || 3000);

let app = express();

app
    .set('port', port)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(morgan('dev'))
    .use((req, res, next) => {
        res.header('Acces-Cntrol-Allow-Origin', '*');
        res.header('Acces-Cntrol-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Whit, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Method', 'GET,POST,OPTIONS,PUT,DELETE');
        res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE');
        next();
    })
    .use('/v1', hotel_routes)
    .use('/v1', hotel_extra_routes);
    

module.exports = app;




