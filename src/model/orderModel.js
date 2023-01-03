const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    customerId: { type: ObjectId, require: true, ref: "Customer" },
    productName:{ type: String, require: true },
    price:{ type: Number }
})

module.exports = mongoose.model( "Order", orderSchema )