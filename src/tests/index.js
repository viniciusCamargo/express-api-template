import http from 'http'
import { describe, it } from 'mocha'
import { expect } from 'chai'
import log from '../log'

import '../index.js'

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3030', res => {
      log(res.statusCode)
      expect(res.statusCode).to.equal(200)
      done()
    })
  })
})
