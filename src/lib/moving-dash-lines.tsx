import React from "react";

import Line from "./line";
import { Color } from "./type";

/**
 * gives the impression of a road moving underneath you
 */
export const MovingDashLines = ({
  y0,
  y1,
  l = 8,
  x = 100,
  idx = 0,
  stroke = "purple",
}: {
  y0: number;
  y1: number;
  l?: number;
  x?: number;
  idx?: number;
  stroke?: Color;
}) => {
  const n = parseInt(((y1 - y0) / (2 * l)).toString()) + 1;

  const moveIdx = idx % (l * 2);

  const middle = new Array(n - 1).fill(0).map((_, i) => {
    return (
      <Line
        key={i}
        p1={{ x, y: y0 + (2 * i + 1) * l + moveIdx }}
        p2={{ x, y: y0 + 2 * i * l + moveIdx }}
        stroke={stroke}
      />
    );
  });

  return (
    <>
      <Line
        p1={{ x, y: y0 + (moveIdx > l ? moveIdx - l : 0) }}
        p2={{ x, y: y0 }}
        stroke={stroke}
      />
      {middle}
      <Line
        p1={{ x, y: y0 + (n * 2 - 1) * l }}
        p2={{ x, y: y0 + (n * 2 - 2) * l + (moveIdx > l ? l : moveIdx) }}
        stroke={stroke}
      />
    </>
  );
};
export default MovingDashLines;
