const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Sensor = new Schema({
   Sensor_name: {
      type: String
   },
   Sensor_id: {
      type: String
   },
   Sensor_unit: {
      type: String
   },
   Sensor_value: {
      type: String
   },
   location_ip:{
    type: String
   },
   building_ip:{
     type: String
   },
   threshold:{
    type: String
  },
   floor:{
     type: String
   }


},
{
   collection: 'Sensor'
})

module.exports = mongoose.model('Sensor', Sensor)
