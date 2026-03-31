const removeFromArray = function(ary) {
  for (let i = arguments.length - 1; i > 0; i--) {
    ary = removeArg(ary, arguments[i])
  }
  return ary
};

function removeArg(ary, removeArg) {
  for (let i = 0; i < ary.length; i++) {
    console.log(ary[i])
    if (ary[i] === removeArg) {
      ary.splice(i, 1)
      i--
    }
  }
  return ary
}

// Do not edit below this line
module.exports = removeFromArray;
