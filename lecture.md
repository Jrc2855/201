# Class 06: JS Objects, DOM, Domain Modeling

## Announcements

* He'll be coming around and chatting about goals and course progress.
* Thank you for the feedback.
  * What's goin well:
    * Instructional staff / TA.
    * ya'll like the warm up and review sessions
      More of this to come.
  * Things that are difficult:
    * There is a lot to cover and we don't have enough time.
      * Spend more time on certain subjects.
    * We have waaaay too much material.
      * We have to get to all of it, even if we can't spend enough time to make us feel comfortable.
    * There is some details missing
      * Terminal commands
      * JS Functions
      * Browser Behaviors

## Warm Up

Refactoring our Bouncer Function:

The bouncer should be modified to take 2 parameters, an 'age' and 'drinks', we should also create a function called 'checkPatron', check patron will 'prompt' the user and return an array with 2 index values:

* '0' index will contain the age of the patron.
* '1' index will contain the number of drinks.

```js

function checkPatron() {
  let age = prompt("What is your age?");
  let drinks = prompt("How many drinks have you had?");

  let patronInfo = [age, drinks];

  return patronInfo;
}

function bouncer(age, drinks){

  if (age < 21 && drinks >= 3) {
    console.log('you are going to jail');
  } else if (drinks >=3 ){
    console.log('you are too drunk');
  } else if (age < 21) {
    console.log('you are too young');
  } else if (age >= 21 && drinks <= 2) {
    console.log('Have a nice night');
  }

}

// you could also say bouncer((checkPatron)[0], checkPatron[1]);
// but the issue with this is that you would run 4 prompts because of the checkPatron function
// but it would only console log one array value per function run. Basically asking the question 4 times
// but only saving one answer per two questions. 
// Breaking down each of the differrent sections of your  program into separate function can make your code
// more maintainable. If you need to fix something, it's easier to fix a small function (3 - 12 lines of code) 
// compared to a large function (20 - 60 lines of code)

let patron = checkPatron();
bouncer(patron[0], patron[1]);
```

## Objects and the DOM

What is an "Object"?

* An Object is much like an array:
  * it's a data structure?
    * anything that can contain / model data.
    * key/ value pair:{key: value}
      * 'let array = ["jacob", 31];'
      * let object = {"name": "Jacob", "age": 31};'
    * Keys are often referred to as 'properties' of an object.
  * What types of things can you store in an object.
    * any data type can be placed within an object, function take on a different name when store in an object: 
    methods.


```js
// Primitive data types are considered properties
// if you call a function inside of an object, it is considered a method
let person = {
// we can define properties in quotes or without quotes. You need a comma after each of your properties.
  "name": "Jacob",
  age: 31,
  speak: function(){
    console.log('Hello!')
  },
}

// dot notation
person.name

// bracket notation
person["name"] // bracket notation uses values to refer to properties. 

let property = "age";
person[property] // => 31

person.speak(); // => "Hello, my name is: ..."
```

Contextual: 'this':
  * Changes depending on where 'this' is used. 
  * If used in an object, it refers to that specific object.


Let's create a Pokemon.

```js

let pokemon = {
  name: 'Charizard',
  abilities: ["blaze", "solar-power"],
  speak: function(){
    console.log(this.name.toUpperCase()+ "!!!")
  },
  listAbilities: function() {
    for(let i = 0; i < this.abilities.length; i++) {
      console.log(this.abilities[i]);
    }
  }
}

pokemon.name; // Charizard
pokemon.speak() // => CHARIZARD!!!
pokemon.listAbilities();

```

### Math.Random

* Math.random() // => number between 0 and 1
* 'Math.random() * 6' // => number between 0 and 6 (not including 6) including decimals
* 'Math.floor(Math.random() * 6') // => give you an integer between 0 and 6 (not including 6).

## The Document Object Model

* A global object that lets us developers modify the HTML 'document'
  * try inspecting the document.
  * This object has methods that lets us perform some really powerful behaviors:
    * document.createElement
      * creates a new HTML elements that can be added to the document. 
        * created elements just exist in our JS runtime, in order to be rendered the need to be added to the 'document'. 
      * Returns that element to our runtime context.
      * 'let text = document.createElement('p'); <!--Replaces the entire page with this 'p' element.-->
      * 'text.innerHTML' = '<span>Hello World'</span>
      * 'text.innerText' = 'Hello World'
      * document.append(text);


## Modeling a Problem Domain

Engineers get abstract problems that do not straight lines, only requirements and constraints

* Hey can you build me a robot that cooks your food?
  * What are the behaviors, and data that is required to allow a robot to cook your food?
    * What food are you cooking?
    * How long are you cooking the food?
    * Can it be cooked longer / shorter depending on weight?

robot:
* cookTime
* foodType
* foodWeight
* cook()
