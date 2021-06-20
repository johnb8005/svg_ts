import * as T from "../type";

export const toStr = (s: T.Coord) => s.x + " " + s.y;

export const getSenseX1 = (start: T.Coord, end: T.Coord) => {
  // #2
  if (start.x > end.x && start.y < end.y) {
    return -1;
  }

  // #4
  if (start.x < end.x && start.y > end.y) {
    return 1;
  }

  return 0;
};

export const getSenseY2 = (start: T.Coord, end: T.Coord) => {
  // #2
  if (start.x > end.x && start.y < end.y) {
    return -1;
  }

  // #4
  if (start.x < end.x && start.y > end.y) {
    return 1;
  }

  return 0;
};

export const getSenseX2 = (start: T.Coord, end: T.Coord) => {
  // #1
  if (start.x < end.x && start.y < end.y) {
    return 1;
  }

  // # 3
  if (start.x > end.x && start.y > end.y) {
    return -1;
  }

  return 0;
};

export const getSenseY1 = (start: T.Coord, end: T.Coord) => {
  // #1
  if (start.x < end.x && start.y < end.y) {
    return -1;
  }

  // # 3
  if (start.x > end.x && start.y > end.y) {
    return 1;
  }

  return 0;
};
