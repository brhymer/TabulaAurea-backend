const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.wishlist.index)
router.post('/', ctrl.wishlist.create)
router.put('/:id', ctrl.wishlist.update)
router.delete('/:id', ctrl.wishlist.destroy)

module.exports = router