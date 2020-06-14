const db = require('../models')

const index = (req, res) => {
    db.Liability.find({}, (err, foundLiabilities) => {
        if (err) console.log('Error in liab index: ', err)

        if (!foundLiabilities) return res.json({
            message: 'No liabilities found'
        })

        res.status(200).json({ liabilities: foundLiabilities })
    })
}

const create = (req, res) => {
    db.Liability.create(req.body, (err, savedLiability) => {
        if (err) console.log('Error in liab create: ', err)

        res.status(200).json({ liability: savedLiability })
    })
}

const update = (req, res) => {
    db.Liability.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedLiability) => {
        if (err) console.log('Error in liab update: ', err)

        if(!updatedLiability) return res.json({
            message: "Could not update that ID"
        })
        res.status(200).json({ liability: updatedLiability })
    })
}

const destroy = (req, res) => {
    db.Liability.findByIdAndDelete(req.params.id, (err, deletedLiability) => {
        if (err) console.log('Error in liab delete: ', err)

        if (!deletedLiability) return res.json({
            message: "No liability with that ID"
        })

        res.status(200).json({ liability: deletedLiability })
    })
}

module.exports = {
    index, create, update, destroy,
}
