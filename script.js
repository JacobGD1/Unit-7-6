document.getElementById('button').addEventListener('click', guessButton)
// add button to my webpage.
let age = 15
// set age as variables.
function guessButton () {
  let guess = prompt('Enter your guess here!')
  guess = parseInt(guess)
  age = parseInt(age)
  // set age and guess as parseInt.
  do {
    if (guess > age) {
      guess = prompt('You guessed too big. Guess again!')
    } else if (guess < age) {
      guess = prompt('You guessed too small. Guess again!')
    } else if (guess === age) {
      document.getElementById('text').innerHTML = 'You got it right! Do you want to play again'
    } // make a message appear based on the guess given by the user.
  } while (guess !== age)
}
