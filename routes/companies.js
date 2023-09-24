const express = require('express');
const router = express.Router();
const validateObjectId = require('../middleware/validateObjectId');
const companyController = require('../controllers/companies');

router.get('/', companyController.getCompanies);

router.get('/:id', validateObjectId, companyController.getCompany);

router.post('/', companyController.postCompany);

router.put('/:id', validateObjectId, companyController.putCompany);

router.delete('/:id', validateObjectId, companyController.deleteCompany);

module.exports = router;
