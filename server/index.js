require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT 
const controller = require('./controller')

const {sendUserInfo, addNewUserInfo} = require('./controller')


// Middleware
app.use(express.json());
app.use(cors());


// Controllers
app.get('/api/info', controller.sendUserInfo)
app.get('/api/info', controller.addNewUserInfo)


// PORT
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})


