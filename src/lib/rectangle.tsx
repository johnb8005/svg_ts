import React from "react";

import { Coord } from "./type";

const Rect = ({
  w,
  h,
  coords: { x, y } = { x: 0, y: 0 },
}: {
  w: number;
  h: number;
  coords: Coord;
}) => (
  <rect
    width={w}
    height={h}
    x={x}
    y={y}
    style={{ fill: "none", strokeWidth: 1, stroke: "rgb(0,0,0)" }}
  />
);

export const Square = ({ w, coords }: { w: number; coords: Coord }) => (
  <Rect w={w} h={w} coords={coords} />
);

export default Rect;
