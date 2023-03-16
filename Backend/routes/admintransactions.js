const express = require("express");
const router = express.Router();

const admintransactions = require('./../controllers/admintransactions');

router.route('/').get(admintransactions.getTransactions);

module.exports = router;