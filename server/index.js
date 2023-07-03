require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const router = require('./routes/index')
const models = require('./models/models')
const PORT = process.env.PORT || 7000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()
  



