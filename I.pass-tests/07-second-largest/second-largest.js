const secondLargest = arr => {
  const orderArr = arr.sort((a, b) => b - a);
  return orderArr[1];
};

module.exports = secondLargest;
