const db = require('../models')

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.json({
            message: err
        })
        res.status(200).json({
            user: foundUser
        })
    })
}

module.exports = {
    show
}