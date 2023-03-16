const express = require("express");
const router = express.Router();

const blocktransactions = require('./../controllers/blocktransactions');

router.route('/').get(blocktransactions.getTransactions).post(blocktransactions.createTransaction);

module.exports = router;