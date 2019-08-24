'use strict'

describe('Request home page', function() {
    it('should return 200', function(done) {
        request.
        get('/').
        set('Origin', 'http://localhost').
        expect(200, done)
    })
})