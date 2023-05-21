const express = require('express')
const app = express()

const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test3')

const morgan = require('morgan')
app.use(morgan('dev'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const User = require('./models/userModel')

app.use(express.static('C:/Coding/Projects/web-projects/webMEAN/client'))

app.get('/', (req, res) => {
    res.sendFile('C:/Coding/Projects/web-projects/webMEAN/client/views/index.html')
})

app.post('/api/addUser', (req, res) => {
    try {
    var newuser = new User()
    newuser.username = req.body.username
    newuser.password = req.body.password
    newuser.save()
    res.sendStatus(200)
    }
    catch (err) {
        console.log(err)
    }

})

app.post('/api/login', async (req, res) => {
    try {
    var username = req.body.username
    var password = req.body.password
    var user = await User.findOne({username: username})
    if (user.password == password) {
        res.send(true)
    }
    else {
        res.send(false)
    }
    }
    catch (err) {
        console.log(err)
    }

})

app.get('/api/getUsers', async (req, res) => {
    var data = await User.find()
    res.send(data)
})

app.listen(3000, () => {
    console.log('server on 3000')
})