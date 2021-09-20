'use strict';

// creates an element
let text = document.createElement('p');

// modify element elements with methods / properties.
text.innerText = 'Hello World';

// selectors and element by ID attribute
let parentElement = document.getElementById('selectMe');

let multipleParents = document.getElementsByClassName('selectUs');

console.log(parentElement, multipleParents);

//"append elements we create to the rendered DOM"
// multipleParents[0].appendChild(text);
parentElement.appendChild(text);



let pokemon = {
  name: 'Charizard',
  abilities: ["blaze", "solar-power"],
  speak: function(){
    console.log(this.name.toUpperCase()+ "!!!")
  },
  // refactor to render abilities onto our HTML document.
  listAbilities: function(parentElement) {
    let listEl = document.createElement('ul');

    for(let i = 0; i < this.abilities.length; i++) {
     // console.log(this.abilities[i]);

     let abilityEl = document.createElement('p'); // returns an HTML 'node'
     abilityEl.innerText = this.abilities[i];
    }
     // place an element within an element
     parentElement.appendChild(abilityEl);
  }
};

pokemon.listAbilities(parentEl);

