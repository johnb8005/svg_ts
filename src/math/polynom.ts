import { Coord } from "../svg/type";

export const equationFromSegment = (p1: Coord, p2) => {
  const m = (p2.y - p1.y) / (p2.x - p1.x);
  const q = p1.y - m * p1.x;

  return { m, q };
};

export const polyY = (x: number, { m, q }) => m * x + q;
export const polyX = (y: number, { m, q }) => (y - q) / m;

export const solve2nd = (a: number, b: number, c: number) => {
  const d = b ** 2 - 4 * a * c;

  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);

  return [x1, x2];
};
