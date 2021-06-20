import React from "react";

import { Circle, Square } from "../lib";

interface Coord {
  x: number;
  y: number;
}

const getSquareCenter = (w: number, coords: Coord) => {
  const x = coords.x + w / 2;
  const y = coords.y + w / 2;
  return { x, y };
};

const Eye = ({ r, w, coords }: { w: number; coords: Coord; r?: number }) => {
  const scoords = getSquareCenter(w, coords);

  return (
    <>
      <Circle r={(Math.sqrt(2) * w) / 2} coord={scoords} />
      <Circle r={w / 2} coord={scoords} />
      <Circle r={Math.sqrt(2) * w} coord={coords} />
      <Circle r={Math.sqrt(2) * w} coord={getSquareCenter(w, scoords)} />
      <Square w={w} coords={coords} />
    </>
  );
};

export default Eye;
