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

router.get('/cars/:id/details', async (req, res, next) => {
  try {
    const details = await Car.findByPk(req.params.id);
    res.send(details);
  }
  catch(err) {
    next(err);
  }
})

module.exports = router;
