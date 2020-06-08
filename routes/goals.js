const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.goals.index)
router.post('/', ctrl.goals.create)
router.put('/:id', ctrl.goals.update)
router.delete('/:id', ctrl.goals.destroy)

module.exports = router