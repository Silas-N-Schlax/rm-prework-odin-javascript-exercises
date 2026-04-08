const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(ary) {
	return ary.reduce((total, num) => {
    return total += num
  }, 0)
};

const multiply = function(ary) {
  return ary.reduce((total, num) => {
    console.log(`${total}, current: ${num}`)
    return total = total * num
  }, 1)
};

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
	let total = 1
  for (let i = num; i > 0; i--) {
    total = total * i
  }
  return total
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
