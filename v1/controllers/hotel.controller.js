'use strict';

const Hotelmodel = require('../models/data');

class HotelController {


    getHotel(req, res, next){
        res.status(200).send({ data: Hotelmodel });
     }   

    getHotelByName(req, res, next){

       let nameHotel = req.params.name;
       console.log(nameHotel);
       if(nameHotel){
           let response = Hotelmodel.filter((value) => {
               return value.name.toLowerCase().indexOf(nameHotel.toLowerCase()) > -1 ? value.name : '';
           });
          res.status(200).send({ data: response });
        }

     } 

    getHotelByStart(req, res, next){
        let numStars = req.params.stars
        if (numStars) {
            let star = parseInt(numStars);
            let response = Hotelmodel.filter((value) => {
                return value.stars === star ? value.stars : '';
            });
            res.status(200).send({ data: response });
        }
     }

}

module.exports = HotelController;