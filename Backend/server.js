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








const bodyParser = require('body-parser');
const axios = require('axios')


app.use(bodyParser.json());

const OPENAI_API_KEY = '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';  // Replace with your actual API key

app.post('/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      messages,
      model: 'gpt-3.5-turbo',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      }
    });

    res.json({ message: response.data.choices[0].message });
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    res.status(500).send('Something went wrong');
  }
});


