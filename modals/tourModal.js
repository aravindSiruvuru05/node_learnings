const mongoose = require('mongoose');

const toursSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tours must have a name'],
    unique: true,
  },
  price: {
    type: String,
    required: [true, 'A tours must have a name'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});

const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;
