function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

function decToFibonnaci(number) {
  let array = []
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
        array.push(0)
        k += 1
      }
      while (m < fibonacciStack.length) {
        array[fibonacciStack[m] - 1] = 1
        m += 1
      }
    }
    return array.split("").reverse().join("")
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