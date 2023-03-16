const BlockTransaction = require('./../models/blocktransaction');

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