const express = require('express');
const app = express();
const SensorRoute = express.Router();

// Sensor model
let Sensor = require('../models/Sensor');
let fault = require('../models/fault');
count = Number;

// Add Sensor
SensorRoute.route('/create').post((req, res, next) => {
  Sensor.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Sensors
SensorRoute.route('/').get((req, res) => {
  Sensor.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
//

SensorRoute.route('/').get((req, res) => {
  Sensor.count((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      //count=this.data;
      alert(res.json(data))
    }
  })
})


//
SensorRoute.route('/readAll').get((req, res) => {
  Sensor.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//
SensorRoute.route('/faultAll').get((req, res) => {
  fault.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Sensor
SensorRoute.route('/read/:id').get((req, res) => {
  Sensor.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Sensor
SensorRoute.route('/update/:id').put((req, res, next) => {
  Sensor.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Sensor
SensorRoute.route('/delete/:id').delete((req, res, next) => {
  Sensor.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = SensorRoute;
