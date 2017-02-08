export default function scrabBag(theInput, tileDistro = {}) {
  const inputArray = []

  if (tileDistro === null) {
    return 'cannot check null'
  }
  if (tileDistro.constructor !== Object || tileDistro.constructor === Array) {
    return 'please use an object to create the distribution of letter tiles'
  }
  for (i = 0; i < theInput.length; i++) {
    inputArray[i] = theInput.charAt([i])
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