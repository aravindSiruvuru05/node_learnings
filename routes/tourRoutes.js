const fs = require('fs');
const express = require('express');
const {
  getAllTours,
  checkBody,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  checkID
} = require('../controllers/toursController');

const router = express.Router();

router.param('id', checkID);

router.route('/').get(getAllTours).post(checkBody,createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
