function isStringShortThen(string , maxLen) {
  if (string.length <= maxLen) {
    return true;
  }
  return false;
}

console.log(isStringShortThen('Коты любят рыбовое', 40));
console.log(isStringShortThen('Коты не любят растительновое' , 8));

function isStringEqualNumber(string , number) {
  if (string.length === number) {
    return true;
  }
  return false;
}
console.log(isStringEqualNumber('рыбовое', 7));
console.log(isStringEqualNumber('растительновое' , 8));


function isStringLongerThen(string , minLen) {
  if (string.length >= minLen) {
    return true;
  }
  return false;
}

console.log(isStringLongerThen('рыбовое', 7));
console.log(isStringLongerThen('растительновое' , 8));

function isThisPalindrome(string){
  let workString = string.toLowerCase().replaceAll(" ", "");
  for (let i = 0; i < workString.length;i++){
    if (workString[i] === workString[workString.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isThisPalindrome('Senes'));
console.log(isThisPalindrome('Лёша на полке клопа нашёл '));
