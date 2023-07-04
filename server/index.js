require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const router = require('./routes/index')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 7000;
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)

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
  



