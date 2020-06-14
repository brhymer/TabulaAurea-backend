const router = require('express').Router()
const ctrl = require('../controllers')
const db = require('../models')

router.get('/', ctrl.assets.index)
router.post('/', ctrl.assets.create)
router.put('/:id', ctrl.assets.update)
router.delete('/:id', ctrl.assets.destroy)


module.exports = router