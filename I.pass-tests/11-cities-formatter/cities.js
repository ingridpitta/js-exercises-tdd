const formatCities = place => {
  return place.map(item => `${item.city} is the capital of ${item.country}`);
};

module.exports = formatCities;
