'use strict'

import mongoose from 'mongoose'

const dbUri = process.env.MONGODB_URI

mongoose.connect(dbUri, { useNewUrlParser: true })

process.on('SIGINT', function() {
    mongoose.connection.close(function() {
        process.exit(0)
    })
})

mongoose.connection.on('error', function(err) {
    console.log('Mongoose! connection error: ' + err)
})