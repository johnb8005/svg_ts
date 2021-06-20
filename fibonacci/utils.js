export const goldenRatio = (1 + Math.sqrt(5)) / 2;
export const getDirection = (i, offset = 0) => {
  if (i % 4 === offset % 4 || i % 4 === (offset + 1) % 4) {
    return 1;
  }
  return -1;
};
export const computeDirections = (nIter) => {
  let dx1 = 0;
  let dy1 = 0;
  let dx2 = 1;
  let dy2 = 1;
  const init = {dx1, dy1, dx2, dy2};
  let f1 = 0;
  let f2 = 0;
  const r = Array(nIter).fill(0).map((_, j) => {
    const i = j + 1;
    const t = f2 === 0 ? 1 : f1 + f2;
    dx1 += t * getDirection(i, 1);
    dy1 += t * getDirection(i);
    dx2 += (t + f2) * getDirection(i);
    dy2 += (t + f2) * getDirection(i, 3);
    f1 = f2;
    f2 = t;
    return {dx1, dy1, dx2, dy2};
  });
  return [init].concat(r);
};
