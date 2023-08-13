import express from 'express';

import { pool } from '../config/database.js';

import { insertIntoTable } from '../schema/insertIntoTables.js';

const applicationRouter = express.Router();

/**
 * ROOT PATH: /api
 */
// GET all applications
applicationRouter.get('/application', async (req, res) => {
  res.json({ message: 'GET all applications' });
});

// GET one application by id
applicationRouter.get('/application/:id', (req, res) => {
  res.json({ message: 'GET one application' });
});

// POST new application
applicationRouter.post('/application', async (req, res) => {
  const attributes = Object.keys(req.body);
  const values = Object.values(req.body);

  await insertIntoTable('message', attributes, values);

  res.json({
    message: 'POST new application',
  });
});

// UPDATE new application
applicationRouter.patch('/application', async (req, res) => {
  res.json({
    message: 'UPDATE new application',
  });
});

export default applicationRouter;
