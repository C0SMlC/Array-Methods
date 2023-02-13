"use strict";

const object = {
  name: "Pratik",
  surname: "Pendurkar",
  rollno: 43,
};

const diceroll = Array.from({ length: 100 }, (_) =>
  Math.trunc(Math.random() * 7)
);
console.log(diceroll);

// From method is used to convert non array elements into arrays
// like nodelist => querySelectorAll returns
// benefit : We can use all array functions like map, reduce, filter, etc.

console.log(Array.from({object},(_)=>Math.trunc(Math.random() * 7)));