const Tour = require('../modals/tourModal');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length,
    requestTime: req.requestTime,
    data: {
      // tours,
    },
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    // data: { tour },
  });
};

exports.createTour = async (req, res) => {
  const newTour = await Tour.create(res.body);
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour,
    },
  });
};

exports.updateTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      // tour: modifiedTour,
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
