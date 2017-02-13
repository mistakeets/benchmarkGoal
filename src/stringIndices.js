export default function stringIndices(phrase, index) {
  const arrayOfWords = phrase.match(/\S+/g) || []
  if (arrayOfWords.length < index || index < 0) {
    return ''
  } else {
    return arrayOfWords[index - 1]
  }
}