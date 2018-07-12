'use strict'

const mongoose = require('mongoose'),
    conf = require('./db.conf.json');

mongoose.connect(`mongodb:\/\/${conf.mongo.host}/${conf.mongo.db}`);

module.exports = mongoose;