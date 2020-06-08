const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.wishes.index)
router.post('/', ctrl.wishes.create)
router.put('/:id', ctrl.wishes.update)
router.delete('/:id', ctrl.wishes.destroy)

module.exports = router