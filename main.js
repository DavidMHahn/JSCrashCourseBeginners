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

//Arrays - variables that hold mutiple values
//old way using array constructor
const numbers = new Array(1, 2, 3, 4, 5); //the 'new' key word is a constructor

//New way is using brackets
const fruits = ['apples', 'oranges', 'pears'];

//You can have multiple data types within the same array
const myArray = ['apples', 10, true, 'bananas'];

//Accessing item(s) in array
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[1]); //Prints oranges since oranges is at index [1] position.

//Adding items to an array. This method may not be good when you don't know
//the length of your array.
const fruits = ['apples', 'oranges', 'pears'];
fruits[3] = 'grapes';
console.log(fruits);

//Using push method to add items to an array
const fruits = ['apples', 'oranges', 'pears'];
fruits.push('tomatoes');
console.log(fruits);

//Using unshift to add items to the beginning of an array
const fruits = ['apples', 'oranges', 'pears'];
fruits.unshift('bananas');
console.log(fruits);

//Using pop method to remove the last item off an array. Pop it off the end.
const fruits = ['apples', 'oranges', 'pears'];
fruits.pop();
console.log(fruits);

//To check if something is an array
const fruits = ['apples', 'oranges', 'pears'];
console.log(Array.isArray(fruits)); //Prints true

//To get the index of a certain value
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits.indexOf('pears'));//Prints 2

//Object literals - essentially key:value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main Street',
        city: 'San Diego',
        state: 'CA'
    }
}
console.log(person); //Prints all values in the person object
console.log(person.firstName);//Prints John
console.log(person.firstName, person.lastName); //Prints John Doe
console.log(person.hobbies[1]);//Prints movies
console.log(person.address.city);//Prints San Diego

//Destructuring
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main Street',
        city: 'San Diego',
        state: 'CA'
    }
}
const { firstName, lastName } = person; //This isn't an assignment statement, but it is
                                        //more like pulling out first and last name from
                                        //the person object.
console.log(firstName); //Prints John

//If the item is embedded like the address values above, you would do the following:
const { firstName, lastName, address: { city }} = person;
console.log(city);//Prints San Diego

//Adding properties to the object
person.email = 'fred@barney.com';
console.log(person); //Will show the object with an email key:value pair

//Arrays of objects 
//Ex: Array of todos
const todos = [
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meet with Boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist appointment',
    isCompleted: false
}
];
console.log(todos);
console.log(todos[1].text);//Prints Meet with Boss

//JSON data format.
//after running our code through a free JSON formatter
//(https://www.freeformatter.com/json-formatter.html)
//We get the following output:
[
    {
       "id": 1,
       "text": "Take out trash",
       "isCompleted": true
    },
    {
       "id": 2,
       "text": "Meet with Boss",
       "isCompleted": true
    },
    {
       "id": 3,
       "text": "Dentist appointment",
       "isCompleted": false
    }
 ]
 //Note that the single quotes (' ') were replaced with double quotes (" ").

//You can also convert the code into JSON format within the script
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
    ];
    const todoJSON = JSON.stringify(todos);
    console.log(todoJSON);

//For Loop
for(let i = 0; i < 10; i++) {
    console.log(i);
}

//For Loop 2
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`); //Using a template string using backticks ` `
}

//While Loop - in these loops you set the variable outside the loop
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//Looping through an Array using a for loop. Not an ideal way to loop through an array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
    ];
    for(let i = 0; i < todos.length; i++) {
        console.log(todos[i].text);
    }

//Looping through an array using for - of loop method
    const todos = [
        {
            id: 1,
            text: 'Take out trash',
            isCompleted: true
        },
        {
            id: 2,
            text: 'Meet with Boss',
            isCompleted: true
        },
        {
            id: 3,
            text: 'Dentist appointment',
            isCompleted: false
        }
        ];
        for(let todo of todos) { //todo is a variable, could be any name, todos is array
            console.log(todo.text); //can use .text, .id, or no dot.
        }

//High order array methods - best way of iterating through arrays.
//High order array methods take in a function as a parameter
//forEach, map, filter

//forEach (loops through the array items)
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
    ];

    todos.forEach(function(todo) {
    console.log(todo.text);
});

//map - (allows us to create new array from existing array). map returns an array
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
    ];

    const todoText = todos.map(function(todo) { //We want to loop through array and
                                                //return just the text values
        return todo.text;

});
console.log(todoText);//Prints an array ["Take out trash", "Meet with Boss"...]

//Filter (allows us to create a new array based on a condition)
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meet with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
    ];

    const todoComplete = todos.filter(function(todo) { //If we want to only return the 
        return todo.isCompleted === true;              //todo items that are completed.
}).map(function(todo) { //This allows us to get only the text from the completed todos
    return todo.text;
});
console.log(todoComplete);

//Conditionals
const x = '10';
if(x == 10) { // == doesn't care about data types, just the value. 10 == '10' is 'true'
    console.log('x is 10');
}

const x = '10';
if(x === 10) { // === data type matters, 10 === '10' is 'false'
    console.log('x is 10');
}
else {
    console.log('x is not 10'); //Prints this because '10' is a string not a number.
}

//else if
const x = 11;
if(x === 10) {
    console.log('x is 10');
}
else if (x > 10) {
    console.log('x is greater than 10');
}
else {
    console.log('x is less than 10');
}

//Can do multiple conditions
// or operator (||). One or the other conditions must be true
const x = 4;
const y =10;
if(x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}

// and operator (&&). Both conditions must be true.
const x = 4;
const y =10;
if(x > 5 && y > 10) {
    console.log('x is more than 5 and y is more than 10');
}

//Ternary operator
const x = 11;

const color = x > 10 ? 'red' : 'blue';

console.log(color);//If x>10 prints red, if x<=10 prints blue.

//Switches
const x = 9;
const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}   //gives different outputs depending on condition.

//Functions
function addNums(num1, num2) {
    console.log(num1 + num2);
}
addNums(5,4); //calling the function with arguments

//Alternately
function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}
addNums(); //prints 3, as it is using the set values in the parameters.
//if we use arguments they will overwrite the set values in the parameters
addNums(3,4); //Prints 7, not 3

//Typically we will not console.log() in a function, we
//would return a value.
function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5,5)); //Prints 10

//Arrow Functions
//Turning the above code into an arrow function
const addNums = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}
console.log(addNums(5,5)); //Prints 10

//Alternatively
const addNums = (num1 = 1, num2 = 1) => console.log(num1 + num2);

addNums(5,5); //Prints 10

//if you want to return something, you don't need the return keyword
const addNums = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums(5,5)); //Prints 10

//With only one parameter, you don't need ()
const addNums = num1 => num1 + 5;

console.log(addNums(5));//Prints 10

//Using with forEach

todos.forEach((todo) => console.log(todo));

//Object Oriented Programming with JS
//Constructing objects using the constructor function
59.35