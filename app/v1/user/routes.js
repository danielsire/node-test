'use strict'

import express from 'express'
import BPromise from 'bluebird'
import User from './model'
import logger from 'app/lib/logger'

const router = express.Router()

router.
get('/', async function(req, res) {

    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}).

get('/:login', async function(req, res) {

    try {
        const user = await User.findByLogin(req.params.login)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}).

post('/', async function(req, res) {

    const user = req.body
    console.log('user----', user)

    try {
        await User.saveSlide(user)
        logger.info('saved user', user)
        res.sendStatus(200)
    } catch (err) {
        logger.info('failed to save user', err)
        res.sendStatus(422)
    }
}).

delete('/:login', async function(req, res) {
    try {
        const { login } = req.params
        await User.deleteOne({ login })
        logger.info('user removed', login)
        res.sendStatus(200)
    } catch (err) {
        logger.info('failed to remove user', err)
        res.status(500).json(err)
    }
})

export default router