const mongoose = require('mongoose')

const WishSchema = new mongoose.Schema({
    name: {type: String, required: true},
    reason: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Wish = mongoose.model('Wish', WishSchema);

module.exports = Wish;