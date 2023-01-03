const orderModel = require("../model/orderModel")

const order = (req, res) => {
    try{

    } catch(error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { order }