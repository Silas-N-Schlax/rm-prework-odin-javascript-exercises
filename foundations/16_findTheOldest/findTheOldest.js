const findTheOldest = function(obj) {
  let sortedPeople = obj.sort((first, second) => {
    firstAge = calculateAge(first.yearOfBirth, first.yearOfDeath)
    secondAge = calculateAge(second.yearOfBirth, second.yearOfDeath)
    return secondAge - firstAge
  })
  return sortedPeople[0]
};

function calculateAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear()
  }
  return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
