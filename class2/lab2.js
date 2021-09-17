"use strict"
// learned about "use strict" from https://www.w3schools.com/js/js_strict.asp

function firstQuestion(){
    let firstOne = prompt("Do you know my name?");
    /*console.log(firstOne);*/
    if(firstOne.toLowerCase() == "no"){
        alert("My name is John Chavez");
    } else {
        (firstOne.toLowerCase() == "yes");
        { alert("Thank you for visiting my site!")}
    }
}

function secondQuestion(){
    let secondOne = prompt("Did you know that I have three kids?");
    /*console.log(secondOne);*/
    if(secondOne.toLowerCase() == "no"){
        alert("They are 8 years old, 4 years old, and a 10 month old.");
    } else {
        (secondOne.toLowerCase() == "yes");
        { alert("So you understand I don't get enough sleep.")}
    }
}


function thirdQuestion(){
    let thirdOne = prompt("Am I currently living in Florida?");
    /*console.log(thirdOne);*/
    if(thirdOne.toLowerCase() == "no"){
        alert("I am unfortunately living in Florida.");
    } else {
        (thirdOne.toLowerCase() == "yes");
        { alert("During the summers it's like living in that Mario level where the sun tries to kill you.")}
    }
}

function fourthQuestion(){
let fourthOne = prompt("Is my favorite drink coffee?");
/*console.log(fourthOne);*/
if(fourthOne.toLowerCase() == "no"){
    alert("Wrong. I need my coffee!");
} else {
    (fourthOne.toLowerCase() == "yes");
    { alert("Decaf tastes like depression.")}
    }
}


function fifthQuestion(){
let fifthOne = prompt("Do you like my page?");
/*console.log(fifthOne);*/
if(fifthOne.toLowerCase() == "no"){
    alert("You should.");
} else {
    (fifthOne.toLowerCase() == "yes");
    { alert("Thank you!")}
    }    
}

function getUserName(){
let userName = prompt('What is your name? ')
    return('Welcome to my profile ' + userName);
}

function sixthQuestion(){    
    let correctAnswer = 7;
    let numberOfChances = 4;
    let userAnswer = '';
    let userCorrect = false;

        for(let i = 0; i < numberOfChances; i++) {
            userAnswer = prompt("Guess a number between 1 and 10!");

            if (userAnswer == correctAnswer) {
                userCorrect = true;
              alert("That's Correct! Great Job!")
                break;             
            }   else if (userAnswer < correctAnswer) {
               alert("Sorry that's too low.");
            }   else if (userAnswer > correctAnswer) {
               alert("Sorry that's too high.");
            }
        }
    }

function seventhQuestion(){

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
}