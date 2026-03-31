const repeatString = function(string, ittr) {
  if (ittr < 0) return "ERROR"
  let newString = ""
  for (ittr; ittr > 0; ittr--) {
    newString = newString.concat(string)
  }
  return newString
};

repeatString("hey", 3)
// Do not edit below this line
module.exports = repeatString;
