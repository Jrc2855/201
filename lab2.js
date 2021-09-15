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

let userName = prompt('What is your name? ')
    document.write('Welcome to my profile ' + userName);