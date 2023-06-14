// Функция №1

let checkString = (string,length) => {
  return string.length <= length;
}
console.log(checkString('проверяемая строка',10));
checkString('проверяемая строка',17);
checkString('проверяемая строка',20);


// Функция №2

let checkPalindrome = (string) => {
  let str = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
    return true;
  }
checkPalindrome('Лёша на полке клопа нашёл');

// Функция 3

function numFromStr(str){
  return [...str]
    .map((i) => {
      if(isFinite(i) === true || i === '.'){
        return i;
      }else{
        return ' ';
      }
    })
    .join('')
    .split(' ')
    .filter((i) => i !== '')
    .map((i) => Number(i));
}
numFromStr('Пришел 2023 год');

