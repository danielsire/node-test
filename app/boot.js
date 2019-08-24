'use strict'

import http from 'http'
import logger from './lib/logger'
import app from './index'
import './lib/mongo'

const httpPort = process.env.PORT || 3000
const msg = `Test API - Running on port ${httpPort}`

const server = http.Server(app)
http.globalAgent.maxSockets = Infinity


server.listen(httpPort, () => {
    logger.info(msg)
});

module.exports = {
    server
}