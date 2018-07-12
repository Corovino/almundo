'use strict';

const HotelController = require('../controllers/hotel.controller'),
    express = require('express'),
    router = express.Router(),
    hc = new HotelController();

router
    .get('/hotel', hc.getHotel)
    .get('/hotel/:name',hc.getHotelByName)
    .get('/star/:stars', hc.getHotelByStart);


module.exports = router;

