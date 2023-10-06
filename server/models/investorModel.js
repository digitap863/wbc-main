const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema({
  fullName: String,
  emailAddress: String,
  contactNumber: String,
  dateOfBirth: String,
  fullAddress: String,
  city: String,
  state: String,
  zipPostal: String,
  country: String,
  investment:{
    type:String,
    default:100000
  },
  idCardNumber: String,
  idImage: String,
  profileImage: String,
});

const InvestorModel = mongoose.model(
  "Investors",
  investorSchema
);
module.exports = InvestorModel;
