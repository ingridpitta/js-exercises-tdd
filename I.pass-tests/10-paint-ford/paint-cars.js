const paintShop = (cars, color) => {
  const copy = JSON.parse(JSON.stringify(cars));
  return copy.map(car => {
    if (car.make === "Ford") {
      car.colour = color;
      return car;
    }
    return car;
  });
};

module.exports = paintShop;
