function fibonacci(n) {
  return n === 0 || n === 1 ? 1 : fibonacci(n - 2) + fibonacci(n - 1)
}

function decToFibonnaci(number) {
  let strArray = []
  let fibonacciStack = []
  let i = 1
  let k = 0
  let m = 0

  while (number >= fibonacci(i)) {
    i += 1
    fibonacciStack.push(i - 1)
    if (number - fibonacci(i - 1) !== 0) {
      decToFibonnaci(number - fibonacci(i - 1))
    } else {
      while (k < fibonacciStack[0]) {
        strArray.push(0)
        k += 1
      }
      while (m < fibonacciStack.length) {
        strArray[fibonacciStack[m] - 1] = 1
        m += 1
      }
    }
    return strArray.reverse()
  }
}

function fibonacciToDec(fibNumber) {
  let z = 0
  let decimal = 0
  let fibNumber = fibNumber.split("").reverse().join("")

  while (z < fibNumber.length) {
    if (fibNumber[x] === 1) {
      decimal += fibonacci(z + 1)
    }
    z += 1
  }
  return decimal
}