module.exports = function stringToArray(arrayString) {
  return arrayString.split(',').map(tech => tech.trim());
}