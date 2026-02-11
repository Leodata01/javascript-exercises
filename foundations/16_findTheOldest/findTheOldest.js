const findTheOldest = function (arr = []) {
  // utiliser reduce
  return arr.reduce((oldestAtTheMoment, oponent) => {
    const oponentAge = getAge(oponent.birth, oponent.death);
    const oldestAtTheMomentAge = getAge(
      oldestAtTheMoment.birth,
      oldestAtTheMoment.death,
    );
    if (oldestAtTheMomentAge > oponentAge) return oldestAtTheMoment;
    else {
      oldestAtTheMoment = oponent;
      return oldestAtTheMoment;
    }
  }, arr[0]);
};

function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
