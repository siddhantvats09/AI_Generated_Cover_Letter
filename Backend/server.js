const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const User = require('./db/user')

require("./db/config")
// const jwt=require('jsonwebtoken')
// const jwtkey="any"





const app = express()

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));
app.listen(3000,()=>{
     console.log('server is running')
})
app.get('/',(req,res)=>{
    res.send("server says hi")
})


app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const user = new User({ name: name, email: email, password: password })
    let result = await user.save()
    result = result.toObject()
    delete result.password
    res.json(result)
})



app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password')
        if (user) {
            res.send(user)
        } else {
            res.send({ result: 'Result Not Found' })
        }
    } else {
        res.send({ result: 'Result Not Found' })
    }
})
