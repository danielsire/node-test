'use strict'

import supertest from 'supertest'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import app from 'app'
import 'app/lib/mongo'

chai.use(sinonChai)

global.request = supertest.agent(app.listen())
global.expect = chai.expect
global.sinon = sinon