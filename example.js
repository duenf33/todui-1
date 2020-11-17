const readline = require('readline');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const secondTry = function(secondGuess) {
  if (secondGuess === 'godzilla') {
    console.log('Correct!');
  } else {
    console.log('You got it wrong AGAIN? Get out of here.');
  }

  interface.close();
}

const handleAnswer = function(dinoGuess) {
  console.log('You answered: ' + dinoGuess)
  if (dinoGuess === 'godzilla') {
    console.log(`That's right!`)
    interface.close();
  } else if (dinoGuess === 'quit' || dinoGuess === 'q') {
    console.log('You stink at this. Goodbye.');
    interface.close();
  } else {
    console.log('Incorrect!')
    interface.question('Try again:\n', secondTry);
  }
}

console.log('What dino am I? "trex", "raptor", or "godzilla"');
console.log('type "quit" or "q" to quit')

interface.question('Type your answer below:\n', handleAnswer)