// The Hello world program
console.log("Hello" +" " +"World!");

/*
This how to multi-line comment out
*/

/*
Data Types
Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.

BigInt: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.

String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ",
though we prefer single quotes. Some people like to think of string as a fancy word for text.

Boolean: This data type only has two possible values— either true or false (without quotes).
 It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.

Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
 undefined means that a given value does not exist.

Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.

Object: Collections of related data.
*/


console.log("My name is Will");
console.log("I am " + 29 + " years old");
console.log(25.10);

//Arithmetic
console.log(29 + 3.5);
console.log(2023 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);


var phrase = "\"Teaching the world how to code\"";
console.log("The length of the phrase " + phrase + " is " + phrase.length + " characters long");

console.log('William in uppercase'.toUpperCase());

console.log("                   Get Rid Of all the whitespace                  ".trim());



var object = {
    value: 'value in the object',
    method() {
        return this.value
    }
}

console.log(object.value);
console.log(object.method());

//Math object
console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017))

//Variables are declared with the 'var' keyword
var myName = 'Will';
console.log(myName);

var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

//the keyword 'let' signals that the variable can be reassigned a different value.
let meal = "pizza";
console.log("Tonight my meal is " + meal);
meal = "Steak";
console.log("Tomorrow I will be having " + meal);

//the keyword const signal it is a static value.
const stone = "stone";

//Mathematical assignment operator
let w = 4;
w = w + 1;
w += 1;
w -= 3;
w *= 2;
w /= 3;
console.log(w);

//The Increment and decrement operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

/*String interpolation

Notice how ` is used instead of ' or "
*/
let myCity = 'London';

console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//typeof operator
let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable);

newVariable = 1;

console.log(typeof newVariable);

//Kelvin and Newton converter
const kelvin = 320;
const celsius = kelvin - 273;
let Fahrenheit = celsius * (9/5) + 32;
let fahrenheit = Math.floor(Fahrenheit);

console.log(`The temperature is ${fahrenheit}`);
let Newton = celsius * (33/100);
let newton = Math.floor(Newton);
console.log(`Newton scale is ${newton}`);

//Human to Dog age converter
let myAge = 29;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);

//Conditions
let sale = true;
sale = false;

if (sale) {
    console.log("Time to buy!");
} else {
    console.log('Time to wait for a sale.');
}

//Comparison operators
let hungerLevel = 7;

if(hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}

//Logical operators
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
    console.log('time to sleep');
} else {
    console.log('not bed time yet');
}

// Truthy and Falsey
/*
Sometimes, you’ll want to check if a variable exists
 and you won’t necessarily want it to equal a specific value —
you’ll only check to see if the variable has been assigned a value.
*/

let wordCount = 1;

if (wordCount) {
    console.log("Truthy");
} else {
    console.log('Falsey');
}

// Truthy and Falsy Assignment
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Ternary operator
// Just like Java
let isCorrect = true;

isCorrect
    ? console.log('Correct!')
    : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'
    ? console.log('I love that!')
    : console.log("I don't love that!");

//Else if statements
let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
    console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
    console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
    console.log('It\'s sunny and warm because it\'s summer!');
}
else {
    console.log('Invalid season.');
}

//Switch statements
let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

//Magic 8 ball exercise
let userName = '';

userName
    ? console.log(`hello ${userName}`)
    : console.log("Hello!");

let userQuestion = "Am I gay?";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8 );
console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
    case 0:
        console.log('It is certain');
        break;
    case 1:
        console.log('It is decidedly so');
        break;
    case 2:
        console.log('Reply hazy try again');
        break;
    case 3:
        console.log('Cannot predict now');
        break;
    case 4:
        console.log('Do not count on it');
        break;
    case 5:
        console.log('My sources say no');
        break;
    case 6:
        console.log('Outlook not so good');
        break;
    case 7:
        console.log('Signs point to yes');
        break;
    default:
        console.log('Invalid item');
        break;
}

//Race Day exercise
let raceNumber = Math.floor(Math.random() * 1000);

var randomBoolean = Math.random() < 0.5;
let isRegisteredEarly = randomBoolean;
let runnersAge = Math.random() * 99;

if (isRegisteredEarly && runnersAge >= 18) {
    raceNumber += 1000;
}

if (isRegisteredEarly && runnersAge >= 18) {
    console.log(raceNumber + ". Your race will begin at 9:30");
}

if (!isRegisteredEarly && runnersAge > 18) {
    console.log('Late adults run at 11:00 am');
}

if (runnersAge < 18) {
    console.log('Youth registrants run at 12:30 pm');
}


//Functions
getReminder();
greetInSpanish();

function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas tardes.');
}

//Parameters in functions
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks("Cole");

//Default values in method signatures
function makeShoppingList(
    item1 = 'milk',
    item2 = 'bread',
    item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

//Return keyword
function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);

//Helper Functions
/*
 We can also use the return value of a function
 inside another function.
  These functions being called within
  another function are often referred to as
  helper functions
 */
//Helper function
function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);

//Function Expression
/*
To declare a function expression:

Declare a variable to make the variable’s name be the name, or identifier, of your function.
Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

Assign as that variable’s value an anonymous function created by using the function keyword
 followed by a set of parentheses with possible parameters.
 Then a set of curly braces that contain the function body.
*/
const plantNeedsWater = function(day){
    if(day === 'Wednesday') {
        return true;
    }
    return false;
}

console.log(plantNeedsWater('Tuesday'));

//Arrow Functions
/*
ES6 introduced arrow function syntax,
a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function.
Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }
*/

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};

//Concise body arrow functions
/*
JavaScript also provides several ways to refactor arrow function syntax.
The most condensed form of the function is known as concise body.

1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses.
 However, if a function takes zero or multiple parameters, parentheses are required.

2. A function body composed of a single-line block does not need curly braces.
 Without the curly braces, whatever that line evaluates will be automatically returned.
  The contents of the block should immediately follow the arrow => and the return keyword can be removed.
   This is referred to as implicit return.
*/

const whenToGoToTheShops = day => day === 'Wednesday';


//Blocks and scope
/*
Blocks and Scope
Before we talk more about scope, we first need to talk about blocks.

We’ve seen blocks used before in functions and if statements. A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.

A block of code could be a function, like this:

const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // blue
}

Notice that the function body is actually a block of code.

Observe the block in an if statement:

if (dusk) {
  let color = 'pink';
  console.log(color); // pink
}

In the next few exercises, we’ll see how blocks define the scope of variables.
*/


/*
Global Scope
Scope is the context in which our variables are declared. We think about scope in relation to blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global variables. Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.

Let’s take a look at an example of global scope:

const color = 'blue';

const returnSkyColor = () => {
  return color; // blue
};

console.log(returnSkyColor()); // blue

Even though the color variable is defined outside of the block, it can be accessed in the function block, giving it global scope.
In turn, color can be accessed within the returnSkyColor function block.


*/

//Block Scope
/*
The next context we’ll cover is block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}. We say that variable has block scope because it is only accessible to the lines of code within that block.

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

Block scope works like this:

const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError

You’ll notice:

We define a function logSkyColor().
Within the function, the color variable is only available within the curly braces of the function.
If we try to log the same variable outside the function, it throws a ReferenceError.

*/

//Scope Pollution
/*
It may seem like a great idea to always make your variables accessible, but having too many global variables can cause problems in a program.

When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program. These variables remain there until the program finishes which means our global namespace can fill up really quickly.

Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents. For example, globally scoped variables can collide with other variables that are more locally scoped, causing unexpected behavior in our code.

Let’s look at an example of scope pollution in practice so we know how to avoid it:

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

You’ll notice:

We have a variable num.
Inside the function body of logNum(), we want to declare a new variable but forgot to use the let keyword.
When we call logNum(), num gets reassigned to 100.
The reassignment inside logNum() affects the global variable num.
Even though the reassignment is allowed and we won’t get an error, if we decided to use num later, we’ll unknowingly use the new value of num.
*/



