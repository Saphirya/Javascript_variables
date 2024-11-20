// Variable VAR //

// declaration
var dyma;
console.log(dyma);

// initialisation
dyma = 1;

var myvar;
var myvar2;
var myvar3;

myvar = 1;
myvar2 = 2;
myvar3 = 3;

console.log(myvar, myvar2, myvar3);

console.log(dyma);

// Variable LET //
{
  let name = "jean";
  console.log(name);
}

// Variable CONST //
{
  const names = "jean";
  console.log(names);
}

//OBJETS
const user = {
  name: "jean",
  age: 20,
  job: "developer",
};

user.job = "designer";
console.log(user);

//HOISTING//
//VAR//
console.log(b); // undefined car l’initialisation se fait lors de la remontée
var b = 1; // assignation
console.log(b); // 1

//a variable a est préparée en mémoire lors de la remontée mais elle n'est pas initialisée à undefined.//
//Les phases sont les suivantes ://
// Phase de déclaration lors de la remontée, si on tente d'accéder à la variable let
// on a une ReferenceError
let a; // initialisation à undefined lors de l’exécution.
// ici a vaut undefined
a = 2; // assignation de la valeur 2
// ici a vaut 2

//types

//string
const name = "jean";
//number
const age = 20;
//null
const hobbies = null;
console.log(typeof hobbies);
//boolean
const isDeveloper = true;
//array
const job = ["developer", "designer"];

console.log(name, age, isDeveloper, job);

let sym = Symbol();
console.log(typeof sym);
// OBJET LITERAL
const ville = {
  name: "paris",
  population: 1000000,
};
const greetings = function () {
  console.log("bonjour");
};
console.log(typeof greetings);

const today = new Date();
console.log(today);

const arr = [1, 2, 3];
console.log(arr);
