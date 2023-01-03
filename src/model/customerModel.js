const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    customerType: {
        type: String,
        default: "regular",
        enum: ["regular", "gold", "platinum"]
    },
    totalOrders: {
        type: Number,
        default:0
    }
},{timestamps: true})

module.exports = mongoose.model("Customer", customerSchema)