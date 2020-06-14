const db = require('../models')
const bcrypt = require('bcrypt')

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({
            status: 400,
            message: "Name, email, and password are required"
        })
    }
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        if (err) return res.status(500).json({
            status: 500,
            message: 'Server error. Please try again'
        })

        if (foundUser) return res.status(400).json({
            status: 400,
            message: "A user with that email already exists"
        })
        // password salting
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json({
                status: 500,
                message: 'Server error--please try again'
            })
            // password hashing
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(500).json({
                    status: 500,
                    message: 'Server error; please try again'
                })
                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }
                db.User.create(newUser, (err, savedUser) => {
                    if (err) return res.status(500).json({ 
                        status: 500, message: err })
                    return res.status(200).json({ 
                        status: 200, message: "User created" })
                })
            })
        })
    })
}

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ 
            status: 400, message: "Please enter an email address and password" });
    }
    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(500).json({ 
            status: 500, message: "Server error- Please try again" });
        if (!foundUser) {
            return res.status(400).json({ 
                status: 400, message: 'Email or password is incorrect' });
        }
        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({ 
                status: 500, message: 'Error. Please try again' }); 
            if (isMatch) {
                // req.session.currentUser = { id: foundUser._id };
                req.session.currentUser = foundUser._id;
                return res.status(200).json({ 
                    status: 200, message: 'Successful login', data: foundUser._id });
            } else {
                return res.status(400).json({ 
                    status: 400, message: 'Email or password is incorrect' });
            }
        });
    });
}

const logout = (req, res) => {
    if (!req.session.currentUser) return res.status(401).json({
        message: 'No user is logged in'
    })
    req.session.destroy(err => {
        if (err) return res.status(500).json({
            message: 'Error encountered--try again'
        })
        res.sendStatus(200)
    })
}

module.exports = {
    register,
    login,
    logout,
}