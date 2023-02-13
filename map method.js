"use strict";

const usd = [1.5, 1.75, 2, 3, 4.5, 5];

const returnsNewArray = usd.map(function (value) {
  return value * 2;
});

console.log(returnsNewArray);

const returnNewArrayArrow = usd.map((value) => {
  if (value > 2) return value;
});

console.log(returnNewArrayArrow);
