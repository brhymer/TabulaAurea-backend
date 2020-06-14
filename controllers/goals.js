const db = require('../models')

const index = (req, res) => {
    db.Goal.find({}, (err, foundGoals) => {
        if (err) console.log('Error in goal index: ', err)

        if (!foundGoals) return res.json({
            message: 'No goals found'
        })

        res.status(200).json({ goals: foundGoals })
    })
}

const create = (req, res) => {
    db.Goal.create(req.body, (err, savedGoal) => {
        if (err) console.log('Error in goal create: ', err)

        res.status(200).json({ goal: savedGoal })
    })
}

const update = (req, res) => {
    db.Goal.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedGoal) => {
        if (err) console.log('Error in goal update: ', err)

        if(!updatedGoal) return res.json({
            message: "Could not update that ID"
        })
        res.status(200).json({ goal: updatedGoal })
    })
}

const destroy = (req, res) => {
    db.Goal.findByIdAndDelete(req.params.id, (err, deletedGoal) => {
        if (err) console.log('Error in goal delete: ', err)

        if (!deletedGoal) return res.json({
            message: "No goal with that ID"
        })

        res.status(200).json({ goal: deletedGoal })
    })
}

module.exports = {
    index, create, update, destroy,
}
