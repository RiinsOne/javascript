function Br() { // eslint-disable-line no-unused-vars
  document.write('<br>');
}

function doubleBr() { // eslint-disable-line no-unused-vars
  document.write('<br>');
  document.write('<br>');
}

const print = (n) => { // eslint-disable-line no-unused-vars
  document.write(n);
  document.write('<br>');
};

/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.
Используйте функцию Math.floor(number) для округления до нижней границы
*/

const formattedTime = (n) => {
  const hours = Math.floor(n / 60);
  let strHours;
  if (hours < 10) {
    strHours = `0${hours}`;
  } else strHours = hours;
  const minutes = n % 60;
  let strMinutes;
  if (minutes < 10) {
    strMinutes = `0${minutes}`;
  } else strMinutes = minutes;
  const str = `${strHours}:${strMinutes}`;
  return str;
};

print(formattedTime(5));
print(formattedTime(15));
print(formattedTime(60));
print(formattedTime(67));
print(formattedTime(175));
print(formattedTime(600));
print(formattedTime(754));

//
