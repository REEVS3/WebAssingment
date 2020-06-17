const router = require("express").Router()
let data_controller = require('../controller/data')

router
    .get ('/',data_controller.data)
module.exports = router


