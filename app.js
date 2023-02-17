const Input = document.getElementById('insertnumber')
const Button = document.getElementById('btn')
const GuessCondition = document.getElementById('guesscondition')
const GuessValues = document.getElementById('guessvalues')
const GuessTimes = document.getElementById('guesstimes')
const NumOfGuesses = document.getElementById('numofguesses')
const GuessNumbers = document.getElementById('guessnumbers')
const None = document.getElementById('none')

let chosenNum = Math.floor(Math.random() * 100);

let i = 0

function Guess() {
    if (!Input.value) {
        alert('Make a guess')
    }
    else if (isNaN(Input.value)) {
        alert('Invalid guess')
        Input.value = ''
    }
    else if (Input.value > 100 || Input.value < 1) {
        alert('Guess not within range')
        Input.value = ''
    }
    else if (Input.value < chosenNum) {
        GuessCondition.innerText = 'Your guess is too low'
        GuessTimes.innerText = i + 1;
        i++;
        None.innerText = ''
        GuessValues.innerText += `${Input.value},`
        Input.value = ''
    }
    else if (Input.value > chosenNum) {
        GuessCondition.innerText = 'Your guess is too high'
        GuessTimes.innerText = i + 1;
        i++;
        GuessValues.innerText += `${Input.value},`
        None.innerText = ''
        Input.value = ''
    } else if (Input.value == chosenNum) {
        GuessTimes.innerText = i + 1;
        i++;
        NumOfGuesses.innerText = ''
        GuessNumbers.innerText = ''
        None.innerText = ''
        GuessCondition.innerText = 'Yipee you win!!!'
        GuessTimes.innerText = `The number was ${Input.value}`
        GuessValues.innerText = `You guessed it in ${i} guesses`
        Input.value = ''
    }
}

Button.addEventListener('click', Guess)