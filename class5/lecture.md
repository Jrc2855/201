# Class 05: HTML/ CSS Images and Text, Git Branching

## Announcements

* 1 on 1 meetings with each of you:
  * [assignment in canvas] (https://canvas.instructure.com/courses/3327150/assignments/24423306?module_item_id=52228959).

## Warm Up

Create a 'bouncer' function, we are all bouncers at the bar, and we need to enforce 2 rules:

* Patrons age must be over 21.
* and everyone in our bar can only have 2 drinks.

function needs 2 inputs:
* age: number
* drinks: number

4 possible outputs:

* if our patron is under 21
  * you are too young
* if our patron has had over 2 drinks
  * you are too drunk
* if our patron is under 21 and has over 2 drinks
  * your going to jail
* if neither of these are true
  * Have a nice night.

```js
// This was the warm up we made together in class. 

function bouncer(){
  // inputs from the user
  // Declare function specific variables inside of their respective functions. Otherwise the webpage tries to load them as soon as the page is loaded. 
  let age = prompt('What is your age?');
  let drinks = prompt('How many drinks have you had?')

  //outputs?
  if (age < 21){
    console.log('you are too young');
  } else if (drinks >= 3) {
    console.log('you are too drunk');
  } else if (age < 21 && drinks >= 3){
    console.log('you are going to jail');
  } else if (age >= 21 && drinks <= 2) {
    console.log('Have a nice night')
  }
}

```

## Conceptual Review of the week

* HTML / CSS
  * What is Semantic Html?
    * Code that is easy for humans and screen readers
      * Our Element Tags dictate the type of content that SHOULD be there, not ncessarily what is allowed by the browser.
        * '<div>'
      * 'main', 'article', 'section', 'p', 'figcaptions', 'detail'.
    * What is the benefit of using Semantic HTML?
      * Makes it easier for us humans to work on our HTML as a team.
      * SEO is much better, with semantic tags.
        * Improve searchability, and accessibility.
  * What is an HTML Attribute?
    * adding a "style" attribute, adding "src" to an element, adding an "id". 
    * An element is being modified, changed in some way. 
    * What are "id"s and "class" attributes used for
      * specify an element for our JS and CSS to find and modify the element.
    * what about "href" and "src"?
      * href specifies a path to an "external reference" such as a URL. 
      * Hyperlinks, and Images.

* JS
  * Primitive Data Types 
    * 5 of them, numbers, strings, booleans, null, undefined.
    * These are the most basic values that can exist in JavaScript.
    * These are "immutable". 
  * Conditional Logic
    * rules: if statements, else if statements, else statements
    * What is the difference between and an 'if' and an 'else' statement?
      * 'if' is an initial statement, and 'else' is secondary statement.
        * 'else' is like a default rule. / inversion of a logical possibility.
      * 'else if' 
        * another 'if' that is a potential possibility.
    * switch statements.
      * evaluates expressions, matches those to 'case' clauses.
  * Arrays: 
    * A variable / data structure that stores multiple values.

  ```js

  let data = ["apple", "pineapple", "grapes"];

  data.push("orange");
  data.push(0);

  console.log(data) // ["apple", "pineapple", "grapes", "orange", 0]
  data.length // 5

  // we use "index" to describe the positions of each piece of data in our array/
  data[0] // the first things "apple"
  data[2] // the third thing "grapes"

  ```
  * Loops
    * What is a loop?
      * Used to run a block of code more than once, until a condition is met.

```js
  // for loop

  // initializer ; condition (we want this to be truthy intially, and the increment/decrementer should eventually make this falsey); increment / decrement
  for(let guesses = 3; guesses > 0; guesses--){
    console.log('looping!');
    // this should run 3 times.
  }

  let guesses =3;

  // what changes?
  while(guesses > 0) {
    console.log("looping");
    guesses--;
    // do something
  }

```


  * Functions
    * What is the benefit of having functions? 
      * Code re-usability!
      * Code readability.
      * More Control.
      * Easy to refactor / maintain.
      * Let's you give abstraction. Breakdown the issue you're working on and separate portions into distinct functions.

```js

// Parameters => required inputs, variables that doeesn't get a value UNTIL the function is invoked.
function myfunction(param) {
  console.log(param); // => undefined

// return keyword, returns a value, we want to send data back to the context function was run in.
  return param.toUpperCase();

}

// invoke myFunction

let name = "jacob";

let nameUpper = convertToUpper(name);
console.log(nameUpper);

myFunction();

```

## HTML/ CSS image and text

* see class5index.html

## Git Branching

Labs today will have you working in feature branches on git:

### Fun with Function Starter Code