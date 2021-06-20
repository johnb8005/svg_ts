export const toStr = (s) => s.x + " " + s.y;
export const getSenseX1 = (start, end) => {
  if (start.x > end.x && start.y < end.y) {
    return -1;
  }
  if (start.x < end.x && start.y > end.y) {
    return 1;
  }
  return 0;
};
export const getSenseY2 = (start, end) => {
  if (start.x > end.x && start.y < end.y) {
    return -1;
  }
  if (start.x < end.x && start.y > end.y) {
    return 1;
  }
  return 0;
};
export const getSenseX2 = (start, end) => {
  if (start.x < end.x && start.y < end.y) {
    return 1;
  }
  if (start.x > end.x && start.y > end.y) {
    return -1;
  }
  return 0;
};
export const getSenseY1 = (start, end) => {
  if (start.x < end.x && start.y < end.y) {
    return -1;
  }
  if (start.x > end.x && start.y > end.y) {
    return 1;
  }
  return 0;
};
