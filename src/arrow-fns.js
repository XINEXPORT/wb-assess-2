// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();
//   => 2

// giveMeTwo();
// console.log(giveMeTwo());

// const giveMeTwo = () =>  2;
const giveMeTwo = () => 2;

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
const addNums = (num1, num2) => num1 + num2;

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
const max = (num1, num2) => {if (num1 <= num2) return num2; else return false};
const result = max(5,8);

// Note: you can also do this on one line:
// const max = (a, b) => (a >= b ? a : b);

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
function evenNumbers(){
    const mixedNumbers = [6, 3, 1, 7, 5, 2, 6, 8, 9, 4, 2, 7, 9, 3, 1, 8, 4, 3];
    const evenNumbers = mixedNumbers.filter((num) => num % 2===0);
    return evenNumbers;
    }
    
    const result2 = evenNumbers();
    console.log(result2);
    
// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']

function createGreetings(names) {
  return names.map(name => "Hello, " + name + "!")};

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
const word = (['apple', 'pear', 'cake', 'pinata']);

const loudLongWords = (words) => {
  return word.filter(word => word.length > 4) .map(word.toUpperCase())
};

console.log(word);

// export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };
