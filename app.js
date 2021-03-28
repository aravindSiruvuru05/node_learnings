// to import node inbulit packages like fs  with import statement we need to run in experimantal version
// node --experimental-modules index.mjs     -- rename the file to .mjs extentin
// import fs from "fs";
const express = require('express');
const morgan = require('morgan');

const toursRoutes = require('./routes/tourRoutes');
const usersRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

//NOTE: Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', toursRoutes);

app.use('/api/v1/users', usersRoutes);

//NOTE: Server Start

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

//NOTE: Routes

// app.get('/api/v1/tours', getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.post('/api/v1/tours', createTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
