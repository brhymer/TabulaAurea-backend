const mongoose = require('mongoose')

const IncomeSchema = mongoose.Schema({
    name: String,
    amount: Number,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User" }   
})

const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;