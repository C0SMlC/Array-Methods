'use strict';
const unique_names = [];
const names='Pratik Sunil Pendurkar';
const username = names.toLowerCase().split(' ').map(eachname=>eachname[0]).join('');
let empty = username;

const usernameg = function()
{
let contray=empty;
for (let index = 0; index < 3; index++) {
const random = Math.trunc(Math.random() * 10);
contray=contray.concat(random);
}
return contray;
}

const generator = function()
{
    const gen = usernameg();
    if (!unique_names.includes(gen)){
      unique_names.push(gen); 
      return gen; 
    }
    generator();
}
generator();
generator();
generator();
generator();
generator();
generator();
generator();
generator();
generator();
generator();
generator();

generator();
generator();
generator();
generator();
console.log(unique_names);


