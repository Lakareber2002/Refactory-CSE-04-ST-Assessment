const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const formSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    dob: {
        type: Date,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    emergency:{
        type: Number,
        trim: true
    },
    passport:{
        type: Number,
        trim: true
    },
    departurecity:{
        type: Number,
        trim: true
    },
    destinationcity:{
        type: Number,
        trim: true
    },
});
formSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
});
module.exports = mongoose.model("Form", formSchema);