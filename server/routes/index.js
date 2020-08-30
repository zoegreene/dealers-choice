const express = require('express');
const router = express.Router();

const db = require('../db/index');
const { Car } = db.models;

router.get('/cars', async (req, res, next) => {
  try {
    const cars = await Car.findAll();
    res.send(cars);
  }
  catch(err) {
    next(err);
  }
})

module.exports = router;
