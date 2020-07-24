const removeMiddle = words => {
  const size = words.length;

  return words.splice((size - 1) / 2, 1);
};

module.exports = removeMiddle;
