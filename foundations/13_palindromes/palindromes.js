const palindromes = function (string) {
  let sanitizedString = string.split("").filter(
    char => 
      char != ' ' &&
      char != ',' &&
      char != '.' &&
      char != '!'
  ).join("").toLowerCase()
  let reversedString = sanitizedString.split("").reverse().join("")
  
  return reversedString === sanitizedString ? true : false
};


// Do not edit below this line
module.exports = palindromes;
