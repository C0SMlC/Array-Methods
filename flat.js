const array = [1,[2,3],[4,[5,6],7]];

const newarray = array.flat();

console.log(newarray);

console.log(newarray.flatMap(val => val*2));