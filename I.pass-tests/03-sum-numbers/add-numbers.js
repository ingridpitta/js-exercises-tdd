function addNumbers(numbers) {
  const addAllnumbers = numbers => {
    return numbers.reduce((acc, item) => acc + item);
  };

  return addAllnumbers(numbers);
}
module.exports = addNumbers;
