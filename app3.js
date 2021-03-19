// rest & spread

// Example 1

// Given this function:
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

// Solution 1
const filterOutOdds = (...args) => args.filter((n) => n % 2 === 0 );

// *******************************************

// Example 2

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

// Solution 2

// OPTION 1
// function findMin(...args) {
//   return Math.min(...args);
// }

// console.log(findMin(1,4,12,-3)) // -3
// console.log(findMin(1,-1) )// -1
// console.log(findMin(3,1)) // 1


// OPTION 2
const findMin = (...args) => Math.min(...args);

console.log(findMin(1,4,12,-3)) // -3
console.log(findMin(1,-1) )// -1
console.log(findMin(3,1)) // 1


// ************************************************

// Example 3
// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// Solution 3

// OPTION 1
// function mergeObjects(obj1, obj2) {
  
//   return {...obj1 , ...obj2}
// }

// console.log(mergeObjects({a:1, b:2}, {c:3, d:4}) )// {a:1, b:2, c:3, d:4}

// OPTION 2
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

console.log(mergeObjects({a:1, b:2}, {c:3, d:4}) )// {a:1, b:2, c:3, d:4}

// ********************************************************

// Example 4
// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// Solution 4

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
console.log(doubleAndReturnArgs([2],10,4) )// [2, 20, 8]

// *********************************

// Example 5

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** 5a) 
remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }

/** 5b) 
Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }

/** 5c) 
 Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }


/** 5d) 
Return a new object with a key removed. */

// function removeKey(obj, key) {

// }


/** 5e) 
Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }


/** 5f) 
Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

// Solutions 5

// 5a)
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = array => {
  let index = Math.floor(Math.random() * array.length);
  console.log(index)
  const frontPart = [...array.slice(0, index)];
  const lastPart = [ ...array.slice(index + 1)];
  return [...frontPart, ...lastPart]
}

console.log(removeRandom([5,4,3,2]))

console.log(removeRandom([5,4,3,2]))

console.log(removeRandom([5,4,3,2]))


// 5b)
/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
}

console.log(extend(['orange', 'apple'], ['kiwi', 'tangerine']))
// (4) ["orange", "apple", "kiwi", "tangerine"]
console.log(extend([1,2,1], [8,10,5]))
// (6) [1, 2, 1, 8, 10, 5]

// 5c)
/** Return a new object with all the keys and values
from obj and a new key/value pair */

// OPTION 1
const addKeyVal = (obj, key, value) => {
  let newObj = { ...obj }
  newObj[key] = value;
  return newObj;
}

console.log(addKeyVal( {lastName: 'Doe'}, 'name', 'John'))
// {lastName: "Doe", name: "John"}
console.log(addKeyVal( {lastName: 'Doe', name: 'John'}, 'age', 35))
// {lastName: "Doe", name: "John", age: 35}
console.log(addKeyVal( {lastName: 'Doe', name: 'John', age: 35}, 'isAlive', true))
// {lastName: "Doe", name: "John", age: 35, isAlive: true}


// OPTION 2 with  object enhancement
//   const addKeyVal = (obj, key, val) => {
//   return { ...obj, [key]: val };
//   }

// console.log(addKeyVal( {lastName: 'Doe'}, 'name', 'John'))
// // {lastName: "Doe", name: "John"}
// console.log(addKeyVal( {lastName: 'Doe', name: 'John'}, 'age', 35))
// {lastName: "Doe", name: "John", age: 35}
// console.log(addKeyVal( {lastName: 'Doe', name: 'John', age: 35}, 'isAlive', true))
// {lastName: "Doe", name: "John", age: 35, isAlive: true}

// 5d)
/** Return a new object with a key removed. */

// OPTION 1
const removeKey = (obj, key) => {
  let newObj = { ...obj }
  delete newObj[key]
  return newObj;
}

console.log(removeKey( {lastName: 'Doe', name: 'John', age: 35}, 'age'))
// {lastName: "Doe", name: "John"}


// OPTION 2 with object enhancement
// const removeKey = (obj, key) => {
//   ({ [key]: undefined, ...obj } = obj);
//   return obj;
// }

// console.log(removeKey( {lastName: "Doe", name: "John", age: 35}, 'age'))
// {lastName: "Doe", name: "John"}

// 5e)
/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
}

console.log(combine( {lastName: "Doe", name: "John", age: 35}, {lastName: "Doe", name: "Jane", age: 45}) )
// {lastName: "Doe", name: "Jane", age: 45}

console.log(combine( {lastName: "Doe", name: "John", age: 35}, {lastName: "Doe", isAlive: true}) )
// {lastName: "Doe", name: "John", age: 35, isAlive: true}

// 5f)
/** Return a new object with a modified key and value. */

// OPTION 1
const update = (obj, key, val) => {
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}

console.log(update( {lastName: 'Doe', name: 'John', age: 35}, 'age', 45) )
// {lastName: "Doe", name: "John", age: 45}


// OPTION 2 with object enhancement 
//   const update = (obj, key, value) => {
//   return { ...obj, [key]: value };
//   }

// console.log(update( {lastName: "Doe", name: "John", age: 35}, 'age', 45) )
// {lastName: "Doe", name: "John", age: 45}
