'use strict';

const conn = require('./schema/hotel');

class HotelModel{

     getAll(cb){
         conn.find({}, (err, docs) => {
             if (err) throw err;
             cb(docs);
         })  
     }

     getHotelById(_id, cb){
         conn.findOne({ _id: _id }, (err, docs) => {
             if (err) throw err;
             cb(docs);
         })  
     }

     saveHotel(data, cb){
         conn.count({ _id: data._id }, (err, count) => {
             if (err) throw err;
             console.log(`Numero de Docs ${count}`);

             if (count === 0) {
                 conn.create(data, (err, hotel) => {
                     if (err) throw err;
                     cb(hotel);
                 })
             } else if (count === 1) {
                 conn.findOneAndUpdate({ _id: data._id }, {
                     name: data.name,
                     stars: data.stars,
                     price: data.price,
                     image: data.image,
                     amenities: data.amenities
                 }, (err, hotel) => {
                     if (err) throw err;
                     cb(hotel);
                 });
             }
         })    
     }

     deleteHotel(_id,cb){
         conn.findByIdAndRemove({ _id: _id },  (err, hotel) => {
             console.log('')
             if (err) throw err;
             cb(hotel);
         });
     }

}
 
module.exports = HotelModel;
