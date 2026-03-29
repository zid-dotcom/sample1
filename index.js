require('dotenv').config()

const express = require('express')
const cors = require('cors')
require('./connect/db')
const router = require('./Routes/router')

const server = express()


server.use(cors())
server.use(express.json())
server.use('/uploads', express.static('./uploads'))

server.use(router)





const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);


})