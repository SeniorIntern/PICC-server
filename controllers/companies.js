const { Company, validate } = require('../models/company');

exports.getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.status(200).send(companies);
};

exports.getCompany = async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company) return res.status(400).send('Invalid company Id!');
  res.status(200).send(company);
};

exports.postCompany = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const company = new Company({
    name: req.body.name,
    web: req.body.web,
    address: req.body.address,
    phone: req.body.phone,
    mail: req.body.mail
  });
  await company.save();
  res.status(200).send(company);
};

exports.putCompany = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const company = await Company.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        name: req.body.name,
        web: req.body.web,
        address: req.body.address,
        phone: req.body.phone,
        mail: req.body.mail
      }
    },
    { new: true }
  );
  res.status(200).send(company);
};

exports.deleteCompany = async (req, res) => {
  const company = await Company.findByIdAndDelete(req.params.id);
  if (!company) res.status(400).send('Company not found!');
  res.status(200).send(company);
};
