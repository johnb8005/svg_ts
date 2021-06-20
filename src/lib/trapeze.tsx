import React from "react";

import { Coord, Color } from "./type";

const Trapeze = ({
  p1,
  p2,
  p3,
  stroke = "grey",
  fill = "none",
}: {
  p1: Coord;
  p2: Coord;
  p3: Coord;
  stroke?: Color;
  fill?: Color | string;
}) => {
  const p4 = { x: p3.x + (p2.x - p1.x), y: p1.y };

  const points = [p1, p2, p3, p4].map((p) => `${p.x},${p.y}`).join(" ");

  return <polygon points={points} style={{ fill, stroke, strokeWidth: 1 }} />;
};

export default Trapeze;
