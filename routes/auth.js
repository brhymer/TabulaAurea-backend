const router = require('express').Router()
const ctrl = require('../controllers')

router.post('/register', ctrl.auth.register)
router.post('/login', ctrl.auth.login)
router.delete('/logout', ctrl.auth.logout)

module.exports = router
