'use strict'

import bunyan from 'bunyan'
import bunyanFormat from 'bunyan-format'
const logger = bunyan.createLogger({
    name: 'Test API',
    stream: bunyanFormat({ outputMode: 'long' })
})
export default logger