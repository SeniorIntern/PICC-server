const express = require('express');
const companies = require('../routes/companies');
const error = require('../middleware/error');
const cors = require('cors');

module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use('/api/companies', companies);
  app.use(error);
};
