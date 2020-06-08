const router = require('express').Router()
const ctrl = require('../controllers')
const db = require('../models')

const incFind = (req, res, next) => {
    db.Income.find({}, (err, foundIncomes) => {
        res.status(200).json({ incomes: foundIncomes})
        })
    next()
}

const expFind = (req, res, next) => {
    db.Expense.find({}, (err, foundExpenses) => {
        res.status(200).json({ expenses: foundExpenses})
    })
    next()
}

router.get('/', [incFind, expFind])

// router.delete('/:id', ctrl.expenses.destroy)

module.exports = router