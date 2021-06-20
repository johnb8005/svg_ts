import React from "react";

import { Coord, Color } from "./type";

const Circle = ({
  r = 10,
  coord = { x: 0, y: 0 },
  stroke = "green",
}: {
  r: number;
  coord: Coord;
  stroke?: Color;
}) => (
  <circle
    r={r}
    cx={coord.x}
    cy={coord.y}
    stroke={stroke}
    strokeWidth="1"
    fill="none"
  />
);

export default Circle;
