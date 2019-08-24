'use strict'

import express from 'express'
import compress from 'compression'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './v1/user/routes'

const app = express()

app.use(morgan('combined', {
    skip: (req, res) => res.statusCode < 400
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(compress())
app.use('*', cors())

app.get('/', function(req, res) {
    res.send('Test API - v' + require('../package.json').version)
})

app.use('/v1/users', userRouter)

app.disable('x-powered-by')

export default app