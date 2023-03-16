const Mongoose = require('mongoose');

const TransactionSchema = new Mongoose.Schema({

    transaction_id: {
        type: String,
        required: true,
        unique: true
    },
    sender_id: {
        type: String,
        required: true,
        unique: true
    },
    receiver_id: {
        type: String,
        required: true,
        unique: true
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: {
        type: String,
        required: true
    }

})