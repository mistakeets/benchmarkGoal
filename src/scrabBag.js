export default function scrabBag(lettersPlayed, tileDistro = {}) {
  const inputArray = []

  if (tileDistro.constructor !== Object || tileDistro.constructor === Array) {
    return 'please use an object to create the distribution of letter tiles'
  }
  for (i = 0; i < lettersPlayed.length; i++) {
    inputArray[i] = lettersPlayed.charAt([i])
  }
  for (k = 0; k < inputArray.length; k++) {
    for (m = 0; m < Object.keys(tileDistro).length; m++) {
      if (inputArray[k] === Object.keys(tileDistro)[m]) {
        tileDistro[Object.keys(tileDistro)[m][0]]--
      }
    }
  }
  return tileDistro
}