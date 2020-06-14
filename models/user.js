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
        type: mongoose.Schema.Types.ObjectId, ref: "Expense"    
    }],
    incomes: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Income"    
    }],
    assets: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Asset"    
    }],
    liabilities: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Liability"    
    }],
    goals: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Goal"    
    }],
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId, ref: "Wish"    
    }],
})

const User = mongoose.model('user', UserSchema);
module.exports = User

