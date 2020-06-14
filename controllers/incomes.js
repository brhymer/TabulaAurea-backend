const db = require('../models')

const index = (req, res) => {
    db.Income.find({}, (err, foundIncomes) => {
        if (err) console.log('Error in inc index: ', err) 

        if (!foundIncomes) return res.json({
            message: "No incomes found"
        })

        res.status(200).json({ incomes: foundIncomes })
    })
}

const create = (req, res) => {
    db.Income.create(req.body, (err, savedIncome) => {
        if (err) console.log('Error in inc create: ', err)

        res.status(200).json({ income: savedIncome })
    })
}

const update = (req, res) => {
    db.Income.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedIncome) => {
        if (err) console.log('Error in inc update: ', err)
        
        if (!updatedIncome) return res.json({
            message: "Cannot update at that ID"
        })

        res.status(200).json({ income: updatedIncome })
    })
}

const destroy = (req, res) => {
    db.Income.findByIdAndDelete(req.params.id, (err, deletedIncome) => {
        if (err) console.log('Error in inc destroy: ', err)

        if (!deletedIncome) return res.json({
            message: "Cannot delete at that ID"
        })
        
        res.status(200).json({ income: deletedIncome })
    })
}

module.exports = {
    index, create, update, destroy,
}