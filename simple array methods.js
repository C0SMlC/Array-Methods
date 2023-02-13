"use strict";

const arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr);

const arr1 = "Pratik";
console.log([...arr1]);

// Joins a string with a specified charachter => mutates original array

console.log([...arr].join(""));

//concat -> Joins two arrays    => mutates original array

console.log(arr.concat([...arr1]));

// Reverse -> revrses a string  => mutates original array

console.log([...arr1].reverse());

// Slice
// Returns a copy of a section of an array. For both start and end,
// A negative index can be used to indicate an offset from the end of the array.

console.log(arr.slice(0, 3));

// Splice
// modifies/deletes selcted  section of an array. For both start and end,
// A negative index can be used to indicate an offset from the end of the array.
console.log(arr.splice(1, 3)); // will delete the substring
console.log(arr);

const string1 = "water";
const string2 = "melon";

console.log(string1.concat(string2));

const array = [1, 2, 3, 4, 5];
console.log(array.splice(2, 3));
console.log(array);