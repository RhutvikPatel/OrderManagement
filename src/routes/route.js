const express = require('express')
const router = express.Router()
const customerController = require("../controller/customerController")
const orderController = require("../controller/orderController")

router.post("/register", customerController.register)

router.post("/order", orderController.order)

//if api is invalid OR wrong URL
// router.all("/**", function (req, res) {
//     res.status(404).send({
//         status: false,
//         message: "The api you request is not available"
//     })
// })

module.exports = router