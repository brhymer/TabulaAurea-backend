const db = require('../models')

const index = (req, res) => {
    db.Wish.find({}, (err, foundWishes) => {
        if (err) console.log('Error in wish index: ', err)

        if (!foundWishes) return res.json({
            message: 'No wishes found'
        })

        res.status(200).json({ wishlist: foundWishes })
    })
}

const create = (req, res) => {
    db.Wish.create(req.body, (err, savedWish) => {
        if (err) console.log('Error in wish create: ', err)

        res.status(200).json({ wish: savedWish })
    })
}

const update = (req, res) => {
    db.Wish.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedWish) => {
        if (err) console.log('Error in wish update: ', err)

        if(!updatedWish) return res.json({
            message: "Could not update that ID"
        })
        res.status(200).json({ wish: updatedWish })
    })
}


const destroy = (req, res) => {
    db.Wish.findByIdAndDelete(req.params.id, (err, deletedWish) => {
        if (err) console.log('Error in wish delete: ', err)

        if (!deletedWish) return res.json({
            message: "No wish with that ID"
        })

        res.status(200).json({ wish: deletedWish })
    })
}

module.exports = {
    index, create, update, destroy,
}
