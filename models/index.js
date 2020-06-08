const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/proj4"
const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch(err => console.log(`MongoDB connection error: ${err}`))

module.exports = {
    Income: require('./income'),
    Expense: require('./expense'),
    Asset: require('./asset'),
    Liability: require('./liability'),
    Goal: require('./goal'),
    Wish: require('./wish'),
    User: require('./user')
}