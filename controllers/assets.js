const db = require('../models')

const index = (req, res) => {
    db.Asset.find({}, (err, foundAssets) => {
        if (err) console.log('Error in asset index: ', err)

        if(!foundAssets) return res.json({
            message: 'No assets found'
        })

        res.status(200).json({ assets: foundAssets })
    })
}

const create = (req, res) => {
    db.Asset.create(req.body, (err, savedAsset) => {
        if (err) console.log('Error in asset create: ', err)

        res.status(200).json({ asset: savedAsset })
    })
}

const update = (req, res) => {
    db.Asset.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAsset) => {
        if (err) console.log('Error in asset update: ', err)

        if(!updatedAsset) return res.json({
            message: "Could not update that ID"
        })
        res.status(200).json({ asset: updatedAsset })
    })
}

const destroy = (req, res) => {
    db.Asset.findByIdAndDelete(req.params.id, (err, deletedAsset) => {
        if (err) console.log('Error in asset delete: ', err)
        
        if (!deletedAsset) return res.json({
            message: "No asset with that ID"
        })

        res.status(200).json({ asset: deletedAsset })
    })
}

module.exports = {
    index, create, update, destroy
}