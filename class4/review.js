'use strict';

/* Our number guessing game */

let correctNumber = 39;
let numberOfGuesses = 4;
let userGuess = '';
let userIsCorrect = false;

// set up a loop, to see if they have guesses left.
// if user has answer over 4 times, or they have guessed correctly end the game
for (let i = 0; i < numberOfGuesses; i++) {
  // get the users response
  // if you do have guesses left, ask the question again. 
  userGuess = prompt('Guess a number between 0 and 100');

  if (userGuess == correctNumber) {
    userIsCorrect = true;
    alert('thats right!')
    break;
  } else if (userGuess > correctNumber){
    alert('your too high');
  } else if (userGuess < correctNumber){
    alert('your too low');
  }

  if (!userIsCorrect) {
    alert('You ran out of guesses')
  } else {
    alert('Great Job')
  }
  //

}



// Multiple Choice question with multiple answers
// We're adding a number to the end of our variables for this lab, but avoid doing this in the
// future because it can make the code very complicated in the future. Think about if you had 
// thousands of lines of code and hundreds of variables. 


let numberOfGuesses2 = 6;
let correct = false;


// check whether the user guess is correct
let statesIveLivedIn = ['Georgia', 'Washington', 'Florida', 'Utah', 'Texas', 'Virginia']

// we need another loop like up above
while (numberOfGuesses2 > 0 && correct == false) {
  // asking the question
  let userGuess2 = prompt('Guess which states Ive lived in.');

  // loop through all states, and check if it is among state lived in.
  for (let i =0; i < statesIveLivedIn.length; i++) {
    if (userGuess2.toLowerCase() == statesIveLivedIn[i].toLowerCase()) {
     // we know we have a correct answer
      alert('thats correct');
      totalCorrect++;
      correct = true; 
      break;
   }
  }

if (!correct){  
  numberOfGuesses2--;
  alert('youre wrong');
}

  if (!Correct) {
    alert('you ran out of guesses ', statesIveLivedIn);
  } else{
    alert('Great Job');
  }
}



