# Class 04: Functions

## Warm Up

1) What is an array?

* A packet of information that you can draw from | and place things into.
  * Organized by 'index' - number that refers to a position.

```js

let people = [];

let instructor = 'Jacob';

//2) How can I add 'instructor' to the 'people' array?

people.push(instructor);
console.log(people); // => ['Hexx', 'Jacob'];

// Both achieve the same end goal
people[0] = instructor; // this works because the array is empty, if
console.log(people); // output => ['Jacob']

```

```js

let people = [];

people[3] = "Jacob";

console.log(people); // [empty, empty, empty, "Jacob"]

```

1) Using a for loop, how can we console.log just "Jacob"


```js

// check every index and see if there's a string there.

for (let i = 0; i < people.length; i++) {
  if (people[i] == "Jacob) {
    console.log(people[i]);
  } 
}

```
## Code Review

* Top 10 List
  * Uses an ordered list
* Guess a number question between zero and 100
  * 'Guess a number between 0 and 100?'
    * We need a JS file that is linked to our HTML.
    * What is the correct number? 'let correctNumber = 39';
    * How many times can the user guess? 'let numberOfGuesses = 4'
    * We need feedback for our user (too high or too low)
    * We need to know when the game is over. 'if the user has guessed 4 times | When the user answers correctly'
* Multiple choice question, with multiple correct answers.
  * 'Guess which states I've lived in.'
    * What are the correct answers: 'let statesIveLivedIn = ['Georgia', 'Washington', 'Florida', 'Utah', 'Texas', 'Virginia'];'.
    * How many times can the user guess? 'let numberOfGuesses = 6'
    * We need feedback for user: 'wrong guess again / you got it right'. 
    * When is the game over? | 'if the user has guessed 6 times | When the user answers correctly'
      * validating answers | normalizing user input.
      * if the user is wrong at game over, display correct answers: alert(statesIveLivedIn);



## CSS Layout

Both of these work along with the box model to ensure even more control of our elements layout.
  * Display Property - dictates how sibling element are displayed next to that element.
    * block: Elements displays itself across its entire parent element. No other element will apear next to it.
    * inline-block: tries to take up as much as possible, but other elements can sit next to it.
    * inline: similar to inline block, cannot set height and width.
  * Position Properties - dictate how elements are positioned within their parent element. 
    * static: Where my parent thinks I will stay.
    * relative: An element can position itself relative to its parent.
    * absolute: an element ignores its siblings and only positions itself relative to its parent. 
    * fixed: ignore everything, and position yourself relative to the browser window. 

## JS Functions

A function is a singular block of logic that can be run however many times, and in whatever context you want.
  * think of this as defining a code as a variable
* It's best to think of a function as something that takes in input, and produces output.

```js

// as functions signature/ definition
function myfirstFunction() {
  console.log('I am alive');

  // supplied an output value to wherever the function was called.
  return 'somevalue';
}

myfirstFunction() // these parentheses tell out runtime we are invoking.

console.log(myfirstFunction());

let isUserCorrect = false;

// doing things and setting to true

isUserCorrect('some answer'); // => true | false

// inputs => parameters: a variable that you declare in the functions parentheses

function logString(banana) {

  console.log('The Users input is: ' + banana);
}

logString('Hello World') // log 'Hello World' to the console

//using return values

function sum(a,b,c,d) {
  return a + b + c + d;
}

let 5plus10 = sum(5);

console.log(5plus10); // undefined
```


## Notes for lab 04

* Adding functions to your Javascript

* One person will be the driver, the other will be the navigator. You'll get a chance to do both positions.
  * The Driver is going to be the one writing the code (making the changes.)
  * The Navigator is going to share their repo and approve the changes after they're made.

* The driver is going to fork the navigator's repo.

* Both people will have a guessing-game.

* Forking basically means you'll make a copy of the file. You make an add commit push to the navigator's repo.
  * The driver will submit a pull request on their GitHub, and the navigator will review the code and accept if they agree with all of the changes.

* Send them a link to your repo. 
  * click fork in the top right of the repo
  * click the green code button in the repo and copy the https address
  * in the terminal change directory into somewhere safe to place a repository
  * use code . to open the repo.
  * make your changes
  * acp in the terminal
  * go back to GitHub
  * press pull request button
  * click create pull request
  * leave a comment
  * Before the Navigator hit's confirm merge!
    * To submit your assignment you need to say "I was the Navigator/ Driver on: enter the url for the pull request you made." 