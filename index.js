function getRandomNumber(min, max) {
  if (min > max) {
    throw new Error("Min value should be less than or equal to Max value");
  }     
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = getRandomNumber;
