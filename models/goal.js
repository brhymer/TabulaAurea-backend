const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;