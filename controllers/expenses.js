const db = require('../models')

const index = (req, res) => {
    db.Expense.find({}, (err, foundExpenses) => {
        if (err) console.log('Error in exp index: ', err)

        if (!foundExpenses) return res.json({
            message: 'No expenses found'
        })

        res.status(200).json({ expenses: foundExpenses })
    })
}

const create = (req, res) => {
    db.Expense.create(req.body, (err, savedExpense) => {
        if (err) console.log('Error in exp create: ', err)

        res.status(200).json({ expense: savedExpense })
    })
}

const update = (req, res) => {
    db.Expense.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedExpense) => {
        if (err) console.log('Error in exp update: ', err)

        if(!updatedExpense) return res.json({
            message: "Could not update that ID"
        })
        res.status(200).json({ expense: updatedExpense })
    })
}

const destroy = (req, res) => {
    db.Expense.findByIdAndDelete(req.params.id, (err, deletedExpense) => {
        if (err) console.log('Error in exp delete: ', err)

        if (!deletedExpense) return res.json({
            message: "No expense with that ID"
        })

        res.status(200).json({ expense: deletedExpense })
    })
}

module.exports = {
    index, create, update, destroy
}
