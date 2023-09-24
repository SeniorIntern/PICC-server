const mongoose = require('mongoose');
const Joi = require('joi');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 64,
    trim: true,
    required: true
  },
  web: {
    type: String,
    minlength: 4,
    maxlength: 164,
    trim: true,
    required: true
  },
  address: {
    type: String,
    minlength: 5,
    maxlength: 164,
    trim: true,
    required: true
  },
  phone: {
    type: String,
    minlength: 10,
    maxlength: 16,
    trim: true,
    required: true
  },
  mail: {
    type: String,
    minlength: 7,
    maxlength: 164,
    trim: true,
    required: true
  }
});

const Company = mongoose.model('companies', CompanySchema);

function validateCompany(company) {
  const { name, web, address, phone, mail } = company;
  const schema = Joi.object({
    name: Joi.string().min(3).max(64).required(),
    web: Joi.string().min(4).max(164).required(),
    address: Joi.string().min(5).max(164).required(),
    phone: Joi.string().min(10).max(16).required(),
    mail: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'np'] }
    })
  });

  return schema.validate({ name, web, address, phone, mail });
}

exports.validate = validateCompany;
exports.Company = Company;
