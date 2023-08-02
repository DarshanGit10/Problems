const express = require('express')
const router = express.Router()
const User = require('./model')
router.post('/createUser', async(req, res)=>{
    try {
        const {userName, email, phoneNumber} = req.body
        if (!userName || !email || !phoneNumber) {
            return res.status(400).json({ error: "Missing required fields" })
        }
        let user = await User.findOne({email})
        if(user){
            return res.status(409).json({error: "User already exists"})
        }
        user = await User.create({
            userName, email, phoneNumber
        })
        res.status(200).json({success: true, message: "Successfully registered..."})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router