const findTheOldest = function(people) {
  const today = new Date();
  const year = today.getFullYear();

  return people.reduce((index, currentValue) => {
    if(!currentValue.yearOfDeath){
      currentValue.yearOfDeath = year;
          return ((index.yearOfDeath - index.yearOfBirth) >
        (currentValue.yearOfDeath - currentValue.yearOfBirth) ?
        index : currentValue);
    }else {
      return ((index.yearOfDeath - index.yearOfBirth) >
        (currentValue.yearOfDeath - currentValue.yearOfBirth) ?
        index : currentValue);
    }
  },0);
};

// Do not edit below this line
module.exports = findTheOldest;
