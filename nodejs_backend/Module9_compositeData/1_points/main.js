// #Интерфейс

const x = 5;
const y = -7;

// Конструктор
const point = makePoint(x, y);

// Селекторы
getX(point);
getY(point);

toString(point); // (5, -7)




// #Манипуляции

const symmetricalXPoint = (point) => makePoint(getX(point), -getY(point));
const point = makePoint(10, 10);
symmetricalXPoint(point); // (10, -10)


const point = makePoint(3, 4);
const point2 = makePoint(0, 0);

quadrant(point); // 1
distance(point, point2); // 5



//

export const getQuadrant = (point) => {
  if (getX(point) > 0 && getY(point) > 0) {
    return 1;
  } if (getX(point) < 0 && getY(point) > 0) {
    return 2;
  } if (getX(point) < 0 && getY(point) < 0) {
    return 3;
  } if (getX(point) > 0 && getY(point) < 0) {
    return 4;
  }
  return null;
};

export const getSymmetricalPoint = (point) => makePoint(-getX(point), -getY(point));

export const calculateDistance = (point1, point2) => {
  const num = Math.sqrt(((getX(point2) - getX(point1)) ** 2) + ((getY(point2) - getY(point1)) ** 2));
  return num;
};


/*
// Решение учителя

// BEGIN
export const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } else if (x < 0 && y > 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export const getSymmetricalPoint = point => makePoint(-getX(point), -getY(point));

export const calculateDistance = (point1, point2) => {
  const dX = getX(point2) - getX(point1);
  const dY = getY(point2) - getY(point1);
  return Math.sqrt((dX ** 2) + (dY ** 2));
};
// END

*/














//
