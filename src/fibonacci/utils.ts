export const goldenRatio = (1 + Math.sqrt(5)) / 2;

export const getDirection = (i: number, offset = 0): 1 | -1 => {
  if (i % 4 === offset % 4 || i % 4 === (offset + 1) % 4) {
    return 1;
  }

  return -1;
};

export const computeDirections = (
  nIter: number
): {
  dx1: number;
  dy1: number;
  dx2: number;
  dy2: number;
}[] => {
  // init deltas
  let dx1 = 0;
  let dy1 = 0;
  let dx2 = 1;
  let dy2 = 1;

  const init = { dx1, dy1, dx2, dy2 };

  // init fibonacci
  let f1 = 0;
  let f2 = 0;
  const r = Array(nIter)
    .fill(0)
    .map((_, j) => {
      // get the right offset
      const i = j + 1;
      // compute next fibonacci number
      const t = f2 === 0 ? 1 : f1 + f2;

      // get the different directions
      dx1 += t * getDirection(i, 1);
      dy1 += t * getDirection(i);
      dx2 += (t + f2) * getDirection(i);
      dy2 += (t + f2) * getDirection(i, 3);

      f1 = f2;
      f2 = t;

      return { dx1, dy1, dx2, dy2 };
    });

  return [init].concat(r);
};
