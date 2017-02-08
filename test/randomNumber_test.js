import { expect } from 'chai'
import chaiChange from 'chai-change'
import guessTheNumber from '../src/randomNumber'

describe('guessTheNumber', function() {

  it('should be a function', function() {
    expect(guessTheNumber).to.be.a('function')
  })

  it('returns a message if user guesses correct number', function() {
    randomNumber = 43
    answerNumber = 43
    expect(console.log).to.equal('You Win!')
  })

  it('returns a message if the user guess is too low', function() {
    randomNumber = 43
    answerNumber = 20
    expect(console.log).to.equal('Too low!')
  })

  it('returns a message if the user guess is too high', function() {
    randomNumber = 43
    answerNumber = 75
    expect(console.log).to.equal('Too high!')
  })

})