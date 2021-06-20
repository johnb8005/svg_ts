import React from "react";

import { Coord, Color } from "./type";

const Line = ({
  p1,
  p2,
  stroke = "orange",
}: {
  p1: Coord;
  p2: Coord;
  stroke?: Color;
}) => (
  <line
    x1={p1.x}
    y1={p1.y}
    x2={p2.x}
    y2={p2.y}
    stroke={stroke}
    strokeWidth="1"
  />
);

export default Line;
