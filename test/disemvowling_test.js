import { expect } from 'chai'
import chaiChange from 'chai-change'
import disemvowling from '../src/disemvowling'

describe('disemvowling', function() {

  it('should be a function', function() {
    expect(disemvowling).to.be.a('function')
  })

  it('removes the vowels from the word', function() {
    expect(disemvowling("car")).to.equal('cr')
  })

  it('removes the vowels and spaces', function() {
    expect(disemvowling("this is just a  test  ")).to.equal('thssjsttst')
  })
})