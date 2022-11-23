function checkStringLength(string, minLength, maxLength) {
  return string.length <= maxLength && string.length >= minLength;
}

checkStringLength('ddd', 6, 6);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive(1, 9); //функция, возвращающая случайное целое число из переданного диапазона включительно взята из developer.mozilla.org

export {getRandomIntInclusive, checkStringLength};
