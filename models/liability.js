const mongoose = require('mongoose')

const LiabilitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, required: true},
    intRate: {type: Number},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Liability = mongoose.model('Liability', LiabilitySchema);

module.exports = Liability;