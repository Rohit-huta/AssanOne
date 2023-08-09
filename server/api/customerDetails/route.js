const express = require("express");
const CustomerDetails = require("./model");

let mobileN;

const router = express.Router();

// POST register user route
router.post("/customer_details", CustomerDetails);

// POST login user
module.exports = router;