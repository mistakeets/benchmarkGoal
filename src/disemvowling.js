export default function disemvowling(word) {
  return word.replace(/[\saeiou]/ig, '')
}