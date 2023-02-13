"use strict"
const payments = [100,268,0,-850,8000,5000,100,-5500];
const totalnormal= payments.reduce(function(acc,value){
    return acc+value;
},0)
const totalArrow = payments.reduce((acc,curr)=>acc+curr,0); /// Arrow
console.log(totalnormal);
console.log(totalArrow);
