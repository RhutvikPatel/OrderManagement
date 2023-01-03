const customerModel = require("../model/customerModel")
const {isValid, isValidRequestBody, isValidName, isValidEmail, isValidPhone} = require("../validator/validaor")

const register = async (req, res) => {
    try{
        let requestBody = req.body
        if (!isValidRequestBody(requestBody)) {
            return res.status(400).send({ status: false, message: "Please provide data for creating customer..." });
        }
        let {name, email, phone} = requestBody
        if (!isValid(name)) return res.status(400).send({ status: false, message: "Please provide first name..." });
    
      
        if (!isValidName(name)) return res.status(400).send({ status: false, message: "Please Enter a valid First Name..." });
        
        if (!isValid(email)) {
            return res.status(400).send({ status: false, message: "Please provide email..." });
        }
        
        if (!isValidEmail) return res.status(400).send({ status: false, message: "Please provide valid email..." });

        const isRegisteredEmail = await customerModel.findOne({ email });
        if (isRegisteredEmail) {
        return res.status(400).send({ status: false, message: "email id already registered..." });
        }

        if (!phone) {
            return res.status(400).send({ status: false, message: "Please provide phone no..." });
        }

        if (!isValidPhone) return res.status(400).send({ status: false, message: "Please provide valid phone number..." });
        const isRegisteredphone = await customerModel.findOne({ phone });

        if (isRegisteredphone) {
            return res.status(400).send({ status: false, message: "phoneNo number already registered..." });
        }
        let createdData = await customerModel.create(requestBody)
        res.status(201).send({status: true, message: "Customer Created...", data: createdData})
    } catch(error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { register }