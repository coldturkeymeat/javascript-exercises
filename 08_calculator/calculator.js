const add = function(...manyArgs) {
  if(manyArgs.length == 0) 
    return 'ERROR';
  
  let sum = 0;
  for (let i = 0; i < manyArgs.length; i++) {
    sum += manyArgs[i];
  }
  return sum;
	
};

const subtract = function(...manyArgs) {
  if(manyArgs.length == 0) 
    return 'ERROR';
  
  let sub = manyArgs[0];
  for (let i = 1; i < manyArgs.length; i++) {
    sub -= manyArgs[i];
  }
  return sub;
	
};

const sum = function(arr) {
  if (arr.length == 0) return 0;
  
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  if (arr.length == 0) return 0;
  
  let mult = arr[0];
  for (let i = 1; i < arr.length; i++) {
    mult *= arr[i];
  }
  return mult;
};

const power = function(a, b) {
  return (a**b);
	
};

const factorial = function(a) {
  if (a == 0) return 1;
  return (a*factorial(a-1));
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
