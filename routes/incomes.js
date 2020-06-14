const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.incomes.index)
router.post('/', ctrl.incomes.create)
router.put('/:id', ctrl.incomes.update)
router.delete('/:id', ctrl.incomes.destroy)

module.exports = router