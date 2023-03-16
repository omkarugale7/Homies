const AdminTransaction = require('../models/admintransaction');

module.exports.getTransactions = async (req, res) => {

    try {
        
        const transactions = await AdminTransaction.find({});

        res.status(200).json({
            transactions: transactions,
            message: "Transactions Fetched Successfully !!!"
        });

    } catch (error) {
        res.status(400).json({
            message: error
        });
    }

}