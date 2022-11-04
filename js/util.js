function checkStringLength(string, minLength, maxLength) {
  return string.length <= maxLength && string.length >= minLength;
}

checkStringLength('ddd', 6, 6);
