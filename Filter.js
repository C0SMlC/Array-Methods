'use strict'

const movements = [-1100,-200,400,500,4820,789,900,100,-4859,-1000];

const newarray= movements.filter((name)=>name>0).filter(key=>key<1000);
console.log(newarray.sort());