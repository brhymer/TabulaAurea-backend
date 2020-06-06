const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/:id', ctrl.users.show)

module.exports = router