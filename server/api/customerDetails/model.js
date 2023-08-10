const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const customerDetailsSceham = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: true,
    },
    full_name: {
      type: String,
      trim: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    martialStatus: {
      type: String,
      required: true,
    },
    sumAssured: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CustomerDetails = new mongoose.model(
  "customerDetails",
  customerDetailsSceham
);

module.exports = CustomerDetails;
