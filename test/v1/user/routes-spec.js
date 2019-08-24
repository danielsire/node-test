'use strict'

import User from 'app/v1/user/model'
import fixture from './fixture.json'

describe('UserRoutesSpec', function() {

    beforeEach(function() {
        return User.create(fixture)
    })

    afterEach(function() {
        return User.remove({})
    })

    describe('.search', function() {

        it('should return 500', function(done) {
            const stub = sinon.stub(User, 'find').throws(new Error())
            request.
            get('/v1/users/').
            expect('Content-Type', /json/).
            expect(500, function(err) {
                stub.restore()
                done(err)
            })
        })

        it('should find user and return 200', function(done) {
            request.
            get('/v1/users/').
            expect('Content-Type', /json/).
            expect(200, function(err, res) {
                if (err) return done(err)
                expect(res.body.length).to.be.eq(1)
                done()
            })
        })
    })

    describe('GET by login', function() {

        it('should return 500', function(done) {
            const stub = sinon.stub(User, 'findByLogin').throws(new Error())
            request.
            get('/v1/users/' + fixture.login).
            expect('Content-Type', /json/).
            expect(500, function(err) {
                stub.restore()
                done(err)
            })
        })

        it('should find user and return 200', function(done) {
            request.
            get('/v1/users/' + fixture.login).
            expect('Content-Type', /json/).
            expect(200, function(err, res) {
                if (err) return done(err)
                expect(res.body._id).to.be.ok
                expect(res.body.login).to.be.eq(fixture.login)
                done()
            })
        })
    })

    describe('.create', function() {
        it('should return 500', function(done) {
            const stub = sinon.stub(User, 'saveSlide').throws(new Error())
            request.
            post('/v1/users').
            expect(422, function(err) {
                stub.restore()
                done(err)
            })
        })

        it('should send POST user', function(done) {
            request.
            post('/v1/users').
            send(fixture).
            expect(200, done)
        })
    })

    describe('.remove', function() {
        it('should remove user and return 200', function(done) {
            request.
            delete('/v1/users/' + fixture.login).
            expect(200, done)
        })
    })
})