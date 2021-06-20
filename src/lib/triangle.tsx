import React from "react";

import { Coord, Color } from "./type";

const Triangle = ({
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
  fill?: Color;
}) => {
  const points = [p1, p2, p3].map((p) => `${p.x},${p.y}`).join(" ");

  return <polygon points={points} style={{ fill, stroke, strokeWidth: 1 }} />;
};
export default Triangle;
