'use strict'

import BPromise from 'bluebird'
import mongoose from 'mongoose'

mongoose.Promise = BPromise
const Schema = mongoose.Schema

const User = Schema({
    fullName: String,
    jobTitle: String,
    email: String,
    login: String
})

User.statics.findByLogin = function(login) {
    const query = { login: login }
    return this.findOne(query)
}

User.statics.saveSlide = function(data, options = {}) {
    options.upsert = true
    options.new = true

    const query = { login: data.login }
    return this.findOneAndUpdate(query, data, options)
}

export default mongoose.model('users', User)