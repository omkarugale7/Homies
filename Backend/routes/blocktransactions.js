const express = require("express");
const router = express.Router();

const blocktransactions = require('./../controllers/blocktransaction');

router.route('/').get(blocktransactions.getTransactions);

module.exports = router;