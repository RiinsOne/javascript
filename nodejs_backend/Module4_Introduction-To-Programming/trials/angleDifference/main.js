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
Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

Примеры:

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
*/

const diff = (angle1, angle2) => {
  if (angle1 >= 0 && angle1 <= 180) {
    const diff1 = angle1 - angle2;
    const diff2 = diff1 + 360;
    if (Math.abs(diff1) < Math.abs(diff2)) {
      return Math.abs(diff1);
    } else if (Math.abs(diff1) > Math.abs(diff2)) {
      return Math.abs(diff2);
    }
    return 180;
  }
  const diff1 = angle2 - angle1;
  const diff2 = diff1 + 360;
  if (Math.abs(diff1) < Math.abs(diff2)) {
    return Math.abs(diff1);
  } else if (Math.abs(diff1) > Math.abs(diff2)) {
    return Math.abs(diff2);
  }
  return 180;
};

print(diff(240, 300));

/*
Решение учителя
// BEGIN (write your solution here)
const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
};
// END
*/

//
