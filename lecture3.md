# Class 03: CSS Box Model, JS loops, truthiness, Switch Statements

## Code Review

* getElementById
  * This is a DOM method, we will introduce and discuss his a little later.
* Conditional Logic
  * if ... else if
* Keep yourself DRY, this is hard to do.
  * use 'functions', we won't introduce these until tomorrow.
* document.write can let anyone write code within your user prompt which can be a massive security flaw.

## VS Code Config

* eslint
  * 'linting': keeping your code free of ugliness.
    * Do you want semicolons?
  * How many spaces in our tabs.
  * eslint: linting 'es' ecmascript.
    * program that you can install in vs code.
  * '.eslintrc.json'
* '.gitignore': hidden files for our operating system.
  * .DS_Store
  * node_modules

## JS Arrays

* Our first iterative Data Structure.
* Primitive Data Types Review:
  * Strings.
  * Numbers.
    * Integers.
  * Boolean
  * null
  * undefined

> Note: Variables! = Data Type

* The Array is like a bucket for holding these data types.
* Typically you want all the information in your arrays to have something to do with one another.
  * Arrays store values, based on an index.
  * The index is a number, starting at '0' and going all the way to total number of things in the array.
    * example: if we store 5 pieces of data in an array, you can reference numbers 0 - 4.
  * In order to add data to an array we just have to define an array, and use either a built in function: 'push' or assign a value based on index.

```js
let person = [];

person.push('John');

* push adds a value to your array.

console.log(person); // ['John']

person.push(29);

console.log(person); // ['John', 29]

* You can add multiple values in a single 'push'.

console.log(person[0]); // 'John'

person.pop()

* Removes the final value in the array.

person.pop(#)

* If you put the value of the index you want removed from your array in the parentheses. 'pop' will remove that specific value.

person[2] = false

* Replaces the value in the designated index with the value you put after the equals sign.

person.length

* Tells you how many values you have in your array.

## Control Flow in JS

How can w control the order that code runs?

* Loops: a way to run code more than once.
  * 'for' loop, runs code for a specific number of iterations.

````js

    // three things that go in our for loop conditions,
    // 1 initializer
    // 2 condition for the initialized
    // 3 incrementer, changes the initialized so that the condition will eventually be false.
for (let i = 0; i < 10; i++) {
    // here goes code that will potentially run more than once.
    console.log('I have run ' + i + ' times');
}

```

    * 'while' : a loop that just runs on a single conditional statement

    ```js

    let initializer = 0
    // '!' is the inversion of a value.
    while (initializer < person.length) {
        console.log(person[initializer]);
        initializer ++; 

    }

       let isJohn = false
    // '!' is the inversion of a value.
    while (!isJohn) {
        console.log(isJohn);
        isJohn = true;

    }

```js

    * 'do while': the same as a while, but will always run at least once. 

```
let isJacob = false;

do {
    // here goes the code to repeat
    console.log('I always run at least once');
    while(isJacob);
}
```js

## Switch Statements

* This is a code block that requires multiple specific conditions to run.
  * Does a value, equal one of many, specified options.
  * When this code runs, if you don't put a break after each tag. It will load all of the cases after the one you've selected.

```js

let name = 'John'

switch (name) {
    case "John":
        console.log('Student');
    case "Jacob"
        console.log('Instructor');
    case "Hexx":
        console.log('TA');
}

```js

## Truthy and Falsey

JavaScript is kinda kooky and has loose definition of sort of true = true, and sort of false = false.

Truthy:
* true
* 1 (any number that isn't zero)
  * fractions, float, any non zero.
* 'string' (non empty string)
  * 'false'
  * '0'
* {} | []

Falsey:
* false
* 0
* '' (empty string)
* undefined
* null


Logical Operators:
* ! - inversion / logical negation
* && - logical inclusion
* || - one or the other


```js

let name = 'John'
let age = 29

// evaluated on it's truthiness
if (name && age) {

// if truth do this
}

```js

## CSS Box Model

* Padding - Space around the border and the content of your element. 
* Margin - Space around the border and adjacent content or parent element.
* Border - The direct line around your content, between padding and margin. 
* (Height and Width): The specific size of any content.

```