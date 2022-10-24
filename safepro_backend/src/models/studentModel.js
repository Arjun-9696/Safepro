const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    email: { type: String, required: true },
    mobile_number: { type: Number, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    docs: { type: String, required: true },
});

module.exports = mongoose.model("student", studentSchema)