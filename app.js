// to import node inbulit packages like fs  with import statement we need to run in experimantal version
// node --experimental-modules index.mjs     -- rename the file to .mjs extentin
// import fs from "fs";
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);


const getAllTours =  (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
}

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((t) => t.id === id);

  if (!tour)
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid Id',
    });

  res.status(200).json({
    status: 'success',
    data: { tour },
  });
}

const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
}

const updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((t) => t.id === id);
  if (!tour)
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid Id',
    });
  const newTours = tours.map((t) => {
    if (t.id === id) {
      return { ...t, ...req.body };
    }
    return t;
  });

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(newTours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour,
        },
      });
    }
  );
}

const deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((t) => t.id === id);
  if (!tour)
    return res.status(404).json({
      status: 'failed',
      message: 'Invalid Id',
    });
  const newTours = tours.filter((t) => t.id !== id);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(newTours),
    (err) => {
      res.status(204).json({
        status: 'success',
        data: null,
      });
    }
  );
}

app.get('/api/v1/tours', getAllTours);

app.get('/api/v1/tours/:id', getTour);

app.post('/api/v1/tours', createTour);

app.patch('/api/v1/tours/:id', updateTour);

app.delete('/api/v1/tours/:id', deleteTour);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
