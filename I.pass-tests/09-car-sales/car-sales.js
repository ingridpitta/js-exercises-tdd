const sales = carSold => {
  let keeper = {};
  for (let value of carSold) {
    if (keeper.hasOwnProperty(value.make)) {
      keeper[value.make] = keeper[value.make] + value.price;
    } else {
      keeper[value.make] = value.price;
    }
  }
  return keeper;
};

module.exports = sales;
