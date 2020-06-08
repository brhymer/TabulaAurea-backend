const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;