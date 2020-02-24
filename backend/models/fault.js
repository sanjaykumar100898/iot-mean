const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let fault = new Schema({
   item: {
      type: String
   },
   qty: {
      type: String
   }
   /*
   Sensor_unit: {
      type: String
   },
   Sensor_value: {
      type: String
   },
   location_ip:{
    type: String
   },
   building:{
     type: String
   },
   floor:{
     type: String
   }*/


},
{
   collection: 'fault'
})

module.exports = mongoose.model('fault', fault)
