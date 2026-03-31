const sumAll = function(num1, num2) {
  if (
    !Number.isInteger(num1) || 
    num1 < 0 ||
    !Number.isInteger(num2) ||
    num2 < 0
  ) return "ERROR"

  let smaller, larger, sum = 0
  if (num1 > num2) smaller = num2, larger = num1
  else smaller = num1, larger = num2

  for (let i = smaller; i <= larger; i++) {
    sum += i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
