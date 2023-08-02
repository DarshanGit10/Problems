const mongoose = require('mongoose')
const urlMongoDB = "mongodb+srv://darshan_nagesh:OEU8uJ4d8TbLfr9U@cluster0.x9g04kg.mongodb.net/demoDb"
async function connectionToMongoDB(){
    try {
        await mongoose.connect(urlMongoDB)
        console.log("MongoDB connected successfully!!!")
    } catch (error) {
        console.log(error)
    }
}

connectionToMongoDB()
const express = require('express')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res)=>{
    res.send("Hello World")
})

app.use('/api', require('./signUp'))
app.use('/api/fetch', require('./fetch'))

app.listen(5000, ()=>{
    console.log(`listening on port http://localhost:5000`)
})