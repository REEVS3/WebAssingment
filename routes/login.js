const router = require("express").Router()
let login_controller = require('../controller/login')

router
    .get ('/',login_controller.login)
    .post ('/',login_controller.signin)
module.exports = router


