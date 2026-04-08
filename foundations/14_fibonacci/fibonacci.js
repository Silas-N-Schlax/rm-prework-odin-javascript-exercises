const fibonacci = function(index) {
  index = Number(index)
  if (index < 0) return "OOPS";
  if (index === 0) return 0;
  const sqe = [1, 1] // sequence
  for (let i = 2; i < index; i++) {
    sqe.push(sqe[i-2] + sqe[i-1])
  }
  return sqe[index - 1]
};

// Do not edit below this line
module.exports = fibonacci;
