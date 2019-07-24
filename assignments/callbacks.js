// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Problem 1
function getLength(arr, cb) {
    return cb(arr);
}  
    // getLength passes the length of the array into the callback.

getLength (items, function() {
    console.log(items.length);
})



//Problem 2
function last(arr, cb) {
  return cb(arr[0]);
  // last passes the last item of the array into the callback.
}
last (items, function() {
  console.log(items[items.length-1]);
})
//Problem 3
function add (x,y) {
  return x + y;
}

function sumNums(x, y, cb) {
  return cb(x,y);
}
  // sumNums adds two numbers (x, y) and passes the result to the callback.

console.log(sumNums (5,7,add));


//Problem 4
function multiplyNums(x, y, cb) {
  return cb(x,y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
multiply = (x,y) => x * y;

console.log(multiplyNums(5,7,multiply));

//Problem 5
function contains(item, list, cb) {
  return cb (item,list);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

let include = (item,list) => list.includes(item);

console.log(contains("Pencil", items, include));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
