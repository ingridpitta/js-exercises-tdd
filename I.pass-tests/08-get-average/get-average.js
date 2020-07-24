// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = arr => {
  const numbers = arr.map(item => typeof item === "number");
  const sum = numbers.reduce((acc, item) => acc + item);

  return sum;
};

module.exports = average;
