import { expect } from 'chai'
import chaiChange from 'chai-change'
import stringIndices from '../src/stringIndices'

describe.only('String Indices ', function() {

  it('should be a function', function() {
    expect(stringIndices).to.be.a('function')
  })

  it('returns the correct word based on the requested index', function() {
    expect(stringIndices("this is just a test", 2)).to.equal('is')
  })

  it('returns an empty string if request is outside the index', function() {
    expect(stringIndices("this is just a test", 6)).to.equal('')
  })
})