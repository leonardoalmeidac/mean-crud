const express = require('express')
const app = express()
const morgan = require('morgan')
const { mongoose } = require('./database')
const bodyParser = require('body-parser')
const cors = require('cors')

//settings
app.set('port', process.env.PORT || 3000)

//middelwares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }))

//routes
app.use('/api/employees', require('./routes/employee.routes'))

//Starting server
app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port'))
})