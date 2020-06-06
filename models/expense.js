const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema({
    name: String,
    amount: Number,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;