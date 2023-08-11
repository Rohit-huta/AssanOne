const mongoose = require("mongoose");
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
      default: "",
    },
    pincode: {
      type: Number,
      required: true,
      default: 0,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
      default: "",
    },
    occupation: {
      type: String,
      required: true,
      default: "",
    },
    martialStatus: {
      type: String,
      required: true,
      default: "",
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
  "customerdetails",
  customerDetailsSceham
);

module.exports = CustomerDetails;
