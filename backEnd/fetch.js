const express = require('express')
const router = express.Router()
const User = require('./model')

router.get("/fetchData", async(req, res)=>{
    try {
        const fetchData = await User.find()
        res.status(200).json({"success": true, "message": fetchData})
    } catch (error) {
        res.status(400).json({"success": false, "error": error})
    }

})



module.exports = router
