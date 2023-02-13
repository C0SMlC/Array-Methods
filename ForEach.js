/// For Arrays

const arr=[10,20,30,40,50,60];
arr.forEach(function(value,index,array){
    console.log(`${index+1}:${value}:${array}`);
});

/// For Maps

const map = new Map([
    ['IND','India'],
    ['US','United States Of America'],
    ['JP','Japan']
]);

map.forEach(function(value,index,map){
console.log(`${index}:${value}`);
});

const set = new Set(['IND','US','JP','RUS']);
console.log(set);
set.forEach(function(index,_,set)
{
console.log(`${index}:${_}`);  // in sets index doesnt exist
});
