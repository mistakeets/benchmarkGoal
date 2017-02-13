import { expect } from 'chai'
import chaiChange from 'chai-change'
import scrabBag from '../src/scrabBag.js'

const tileDistro = {
  'A': 9,
  'B': 2,
  'C': 2,
  'D': 4,
  'E': 12,
  'F': 2,
  'G': 3,
  'H': 2,
  'I': 9,
  'J': 1,
  'K': 1,
  'L': 4,
  'M': 2,
  'N': 6,
  'O': 8,
  'P': 2,
  'Q': 1,
  'R': 6,
  'S': 4,
  'T': 6,
  'U': 4,
  'V': 2,
  'W': 2,
  'X': 1,
  'Y': 2,
  'Z': 1,
  '_': 2
}

const theInput = 'AERETOXMYCNS_B'

describe('scrabBag', function() {

  it('should be a function', function() {
    expect(scrabBag).to.be.a('function')
  })

  it('returns a count of the remaining tiles', function() {
    expect(tileDistro).to.equal({
      A: 8,
      B: 1,
      C: 1,
      D: 4,
      E: 10,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 1,
      N: 5,
      O: 7,
      P: 2,
      Q: 1,
      R: 5,
      S: 3,
      T: 5,
      U: 4,
      V: 2,
      W: 2,
      X: 0,
      Y: 1,
      Z: 1,
      _: 1
    })
  })
})