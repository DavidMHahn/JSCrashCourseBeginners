// This is the code from the JavaScript Crash Course For Beginners
// This course was provided by Traversy Media
// It is on YouTube. Link: https://www.youtube.com/watch?v=hdI2bqOjy3c

//Logging Output
//alert('Hello World'); //Do not use for debugging. It stops the rest of the script and only prints strings.
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');

//Variables - var, let, const. var isn't used much now because var is globally scoped.
//let and const have block-level scope
let age = 30;
console.log(age);

//const age = 34; //const needs a value assignment when it is declared
//age = 33;
//console.log(age);   //Gives error as the const age cannot be overwritten

// PRIMITIVE DATA TYPES - String, Number, Boolean, null, undefined, symbol

const name = 'Brad';    //Strings can be in ' ' or " ".
const age1 = 37;         //Numbers don't need quotes around them
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined by default

console.log(typeof name); //Prints string
console.log(typeof x); //Prints object, but its not really an object, it is null

//Strings and concatenation
console.log('My name is ' + name + ' and I am ' + age1);

//Template String
console.log(`My name is ${name} and I am ${age1}`); //Use back tick (`) not single quote

const hello = `My name is ${name} and I am ${age1}`;
console.log(hello);

//String properties and methods
const s = 'Hello World';
console.log(s.length); //Prints 11, the number of characters and spaces in the string.
console.log(s.toUpperCase()); //Prints HELLO WORLD
console.log(s.toLowerCase()); //Prints hello world
console.log(s.substring(0, 5)); //Prints Hello
console.log(s.substring(0, 5).toUpperCase()); //Prints HELLO

//Split a string into an array
console.log(s.split('')); //Split by letter

const str = 'technology, computers, it, code';
console.log(str.split(', ')); //Creates an array of the different values in the string.

//23:50
















