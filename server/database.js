const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/mean-stack-crud'

mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))
module.exports = mongoose