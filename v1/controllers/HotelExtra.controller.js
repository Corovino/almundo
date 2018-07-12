'use strict';

const HotelModel = require('../models/hotel.model'),
      hm = new HotelModel();

class HotelExtrController{

    getAll(req, res, next){
        hm.getAll((docs) => {
            res.status(200).send({ data: docs });
        });  
    }

    getHotelById(req, res, next){
        let _id = req.params.id;

        em.getOne(_id, (docs) => {
            res.status(200).send({ data: docs });
        }); 
    }

    saveHotel(req, res, next){
        let hotel = {
            _id: (req.body._id || null),
            name: req.body.name,
            stars: req.body.stars,
            price: req.body.price,
            image: req.body.image,
            amenities: req.body.amenities 
        }
        
        hm.saveHotel(hotel, (hotel) => {
            console.log('h',hotel);
            res.status(200).send({ data: hotel });
        })
    }

    deleteHotel(req,res,next){
        let _id = req.params.id;
        console.log('idc', _id);
        hm.deleteHotel(_id, (hotel) => {
              console.log(hotel);
              res.status(200).send({data:hotel});   
        } );
    }
}

module.exports =  HotelExtrController;