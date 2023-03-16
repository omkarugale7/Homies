const BlockTransaction = require('../models/blocktransaction');
const AdminTransaction = require('../models/admintransaction');

module.exports.getTransactions = async (req, res) => {

    try {
        
        const transactions = await BlockTransaction.find({});

        await BlockTransaction.deleteMany();

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

module.exports.createTransaction = async (req, res) => {

    try {
        
        const { transaction_id, sender_id, receiver_id, amount, timestamp, contract_address } = req.body;

        if(!transaction_id || !sender_id || !receiver_id || !amount || !timestamp || !contract_address) {
            return res.status(400).json({
                message: "Missing required field(s)"
            });
        } 

        const transaction = await AdminTransaction.create({ transaction_id, sender_id, receiver_id, amount, timestamp, contract_address });


        res.status(200).json({
            transaction: transaction,
            message: "Transaction Added Successfully"
        });

    } catch (error) {
        
        res.status(400).json({
            message: error
        });

    }

}