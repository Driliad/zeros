module.exports = function getZerosCount(number) {
  // your implementation
  if (number >= 1 && number <= 1e8) {
    var countOfZeros = 0;
    while (number >= 5) {
      countOfZeros = countOfZeros + Math.floor(number / 5);
      number = Math.floor(number / 5);
    }
    return countOfZeros;
  }
  return;
}
