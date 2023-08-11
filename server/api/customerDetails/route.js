const express = require("express");
const CustomerDetails = require("./model");
const { customerDetailsPost } = require("./controller");

const router = express.Router();

// POST register user route
router.post("/customer_details", customerDetailsPost);

// POST login user
module.exports = router;