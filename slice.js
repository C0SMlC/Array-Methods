'use strict'
const array1=[10,56,1];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

let array=[array1,array2,array3];

// console.log(array.slice(0,4));
// console.log(array);

// // splice

// console.log(array.splice(0,1));
// console.log(array);


// console.log(array.findIndex((array)=>10));

//console.log(array1.sort(-1));


console.log(array1.slice().sort((a,b)=>a-b));

console.log(array1.every(acc=>(acc>0)));
