const express = require('express')
const app = express()
const router = require('./routes/UserRoutes')
const connectDB = require('./config/db')
app.use(express.json())
app.use('/api/users',router)
connectDB()
app.get('/',(req,res)=>{
    res.send("API Started..")
})
app.listen(5000,console.log("API Started.."))
