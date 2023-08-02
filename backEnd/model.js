const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    userName: {type:String, required: true},
    email: {type:String, required: true, unique: true},
    phoneNumber: {type:Number, required: true}
})

const model = mongoose.model('User', userSchema)
module.exports = model