'use strict'

import { assign, first } from 'lodash'
import User from 'app/v1/user/model'
import fixture from './fixture.json'

describe('UserModelSpec', function() {

    beforeEach(function() {
        return User.create(fixture)
    })

    afterEach(function() {
        return User.remove()
    })

    describe('.save', function() {

        it('should create new User', async function() {

            await User.saveSlide(assign(fixture, { login: 'fulano' }))
            const users = await User.find({ login: 'fulano' })
            expect(first(users)._id).to.be.ok
        })

        it('should update user', async function() {

            await User.saveSlide(fixture)

            fixture.login = 'fulano2'
            await User.saveSlide(fixture)

            const users = await User.find({ login: fixture.login })
            expect(first(users).login).to.be.equal('fulano2')
        })

    })
})