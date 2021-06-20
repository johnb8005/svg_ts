import React from "react";
import { Square } from "../index";
import Path from "./ui";

import * as PT from "./type";

export const PathWSquare = ({
  start,
  end,
  curvatureRatio = 0.5,
  displaySquares = true,
  displayCircles = true,
}: PT.PathProps & {
  displaySquares: boolean;
}) => {
  const w = Math.abs(start.x - end.x);

  const coords = { x: Math.min(start.x, end.x), y: Math.min(start.y, end.y) };

  const square = displaySquares ? <Square w={w} coords={coords} /> : null;

  return (
    <React.Fragment>
      {square}
      <Path
        start={start}
        end={end}
        curvatureRatio={curvatureRatio}
        displayCircles={displayCircles}
      />
    </React.Fragment>
  );
};

export default PathWSquare;
