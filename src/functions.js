//* 'use strict';
/*
 *Functions for operations v1
 */

const operatorMp = new Map([
  ["+", add],
  ["-", sub],
  ["*", mul],
  ["/", div],
]);

const operators = [...operatorMp.keys()];
console.log(operators);

//& ADDITION FUNCTION
function add(a, b) {
  return a + b;
}

//& SUBTRACTION FUNCTION
function sub(a, b) {
  return a - b;
}

//& MULTIPLICATION FUNCTION
function mul(a, b) {
  return a * b;
}

//& DIVISION FUNCTION
function div(a, b) {
  return a / b;
}

//& OPERATE FUNCTION
const operate = (op, ...nums) => {
  if (!operators.includes(op)) return;
  const [a, b] = nums;
  console.log(operatorMp.get(op)(a, b));
};

operate("/", 3, 6);
