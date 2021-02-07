export const makeRectangle = (p, widht, hight) => cons(p, cons(widht, hight));

// const p = makePoint(0, 1);
// const rectangle = makeReactangle(p, 5, 4);

export const getStartPoint = rectangle => car(rectangle);
export const getWidth = rectangle => car(cdr(rectangle));
export const getHeight = rectangle => cdr(cdr(rectangle));

export const topLeftPoint = rectangle => car(rectangle);

export const topRightPoint = rectangle => {
  const x = getX(topLeftPoint(rectangle)) + getWidth(rectangle);
  const y = getY(topLeftPoint(rectangle));
  return cons(x, y);
};

export const bottomRightPoint = rectangle => {
  const x = getX(topRightPoint(rectangle));
  const y = getY(topLeftPoint(rectangle)) - getHeight(rectangle);
  return cons(x, y);
}

export const bottomLeftPoint = rectangle => {
  const x = getX(topLeftPoint(rectangle));
  const y = getY(topLeftPoint(rectangle)) - getHeight(rectangle);
  return cons(x, y);
}

export const square = rectangle => getWidth(rectangle) * getHeight(rectangle);
export const perimeter = rectangle => (2 * (getWidth(rectangle) + getHeight(rectangle)));

export const containsTheOrigin = (rectangle) => {
  if ((getX(topLeftPoint(rectangle)) < 0 && getY(topLeftPoint(rectangle)) > 0) && (getX(topRightPoint(rectangle)) > 0 && getY(topRightPoint(rectangle)) > 0) && (getX(bottomLeftPoint(rectangle)) < 0 && getY(bottomLeftPoint(rectangle)) < 0) && (getX(bottomRightPoint(rectangle)) > 0 && getY(bottomRightPoint(rectangle)) < 0)) {
    return true;
  }
  return false;
};





Решение учителя

// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const getStartPoint = rectangle => car(rectangle);
export const getHeight = rectangle => cdr(cdr(rectangle));
export const getWidth = rectangle => car(cdr(rectangle));

export const square = rectangle => getHeight(rectangle) * getWidth(rectangle);
export const perimeter = rectangle => 2 * (getHeight(rectangle) + getWidth(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END






Решение kudryavi

// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from 'hexlet-points';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const makeRectangle = (point, width, height) => cons(point, cons(width, height));

export const getStartPoint = rectangle => car(rectangle);

export const getWidth = (rectangle) => car(cdr(rectangle));

export const getHeight = (rectangle) => cdr(cdr(rectangle));

export const square = (rectangle) => {
  const a = getWidth(rectangle);
  const b = getHeight(rectangle);
  return a * b;
}

export const perimeter = (rectangle) => {
  const a = getWidth(rectangle);
  const b = getHeight(rectangle);
  return 2 * (a + b);
}

export const containsTheOrigin = (rectangle) => {
  const a = getWidth(rectangle);
  const b = getHeight(rectangle);
  const x = getX(getX(rectangle));
  const x1 = x + a;
  const y = getY(getX(rectangle));
  const y1 = y - b;

  if (x < 0 && x1 > 0 && y > 0 && y1 < 0) {
    return true;
  }
  return false;
}
// END




































//
