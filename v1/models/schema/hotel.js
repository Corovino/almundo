'use strict';

const mongoose = require('../../config/model'),
    Schema = mongoose.Schema,
    HotelSchema = new Schema({
        _id: Schema.Types.ObjectId,
        name: String,
        stars: Number,
        price: Number,
        image: String,
        amenities: String
    }, {
            collection: 'hotel'
        }),
    Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;

