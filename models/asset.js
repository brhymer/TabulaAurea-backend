const mongoose = require('mongoose')

const AssetSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, required: true},
    intRate: {type: Number},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;