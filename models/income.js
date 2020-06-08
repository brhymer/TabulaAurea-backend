const mongoose = require('mongoose')

const IncomeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User" }   
})

const Income = mongoose.model('Income', IncomeSchema);

module.exports = Income;