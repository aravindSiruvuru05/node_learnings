const mongoose = require('mongoose');

// required are those fields which are to be filled when modal is created
// others will be added when the modal is updated

const toursSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tours must have a name'],
    trim: true,
    unique: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a max group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tours must have a difficulty'],
  },
  price: {
    type: Number,
    required: [true, 'A tours must have a price'],
  },
  priceDiscount: Number,
  summery: {
    type: String,
    trim: true,
  },
  ratingsAverage: {
    type: Number,
    default: 0,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have an image'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;
