import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { createSchema } from './model/createDatabase.js';

import applicationRouter from './routes/applicationRoute.js';

const PORT = process.env.PORT || 8080;

const app = express();

// middleware
app.use(express.json());

app.use((err, req, res, next) => {
  console.log('MIDDLEWARE');
  console.error(err.stack);
  res.status(500).send('Something broke!');
  next();
});

// SETUP DATABASE
createSchema()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// ROUTERS
// ROOT PATH: /api
// api/member
app.use('/api', applicationRouter);

// CONNECTION
app.listen(PORT, () => {
  console.log(`Listening at port: ${PORT}...`);
});
