const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.liabilities.index)
router.post('/', ctrl.liabilities.create)
router.put('/:id', ctrl.liabilities.update)
router.delete('/:id', ctrl.liabilities.destroy)

module.exports = router