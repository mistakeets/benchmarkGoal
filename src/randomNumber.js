const readline = require('readline')
const min = Math.ceil(1)
const max = Math.floor(100)

const randomNumber = Math.floor(Math.random() * (max - min) + min)

export const guessTheNumber = () => {
  let guesses = 5

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  terminal.setPrompt('Please guess a number between 1 and 100: ')
  terminal.prompt()
  terminal.on('line', (answer) => {
    let answerNumber = parseInt(answer)

    if (answerNumber > randomNumber) {
      console.log('Too high!')
      console.log('You have ' + guesses + ' guesses left')

    } else if (answerNumber < randomNumber) {
      console.log('Too low!')
      console.log('You have ' + guesses + ' guesses left')

    } else if (answerNumber === randomNumber) {
      console.log('You Win!')
      process.exit(0)
    } else {
      console.log('Please use numbers')
      console.log('You have ' + guesses + ' guesses')
    }

    guesses--

    if (guesses < 1) {
      console.log('You Lose. Better luck next time!')
      process.exit(0)
    }

    terminal.prompt()
  })

  terminal.on('close', () => {
    console.log('See you next time!')
    process.exit(1)
  })
}