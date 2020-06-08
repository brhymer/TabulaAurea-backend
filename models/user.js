const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    expenses: [{
        type: mongoose.Schema.Types.ObjectId, ref: "expense"    
    }],
    incomes: [{
        type: mongoose.Schema.Types.ObjectId, ref: "income"    
    }],
})

const User = mongoose.model('user', UserSchema);
module.exports = User

