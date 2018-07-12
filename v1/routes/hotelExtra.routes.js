'use strict';

const HotelExtraController = require('../controllers/HotelExtra.controller'),
    express = require('express'),
    router = express.Router(),
    hec = new HotelExtraController();

router
    .get('/hotele', hec.getAll)
    .get('/hotele/:id', hec.getHotelById)
    .post('/hotele', hec.saveHotel)
    .delete('/hotele/:id',hec.deleteHotel);


module.exports = router;