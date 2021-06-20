import React from "react";
import { Circle } from "../index";
import * as T from "../type";
import * as U from "./utils";

const Path = ({
  start,
  end,
  curvatureRatio = 0.5,
  displayCircles = true,
}: {
  start: T.Coord;
  end: T.Coord;
  curvatureRatio: number;
  displayCircles: boolean;
}) => {
  const r = Math.abs(start.x - end.x);
  const curvature = r * curvatureRatio;

  const senseX1 = U.getSenseX1(start, end);
  const senseX2 = U.getSenseX2(start, end);
  const senseY1 = U.getSenseY1(start, end);
  const senseY2 = U.getSenseY2(start, end);

  const c1 = {
    x: start.x + senseX1 * curvature,
    y: start.y + senseX2 * curvature,
  };
  const c2 = { x: end.x + senseY1 * curvature, y: end.y + senseY2 * curvature };

  const circles = displayCircles ? (
    <React.Fragment>
      <Circle r={3} coord={start} stroke="blue" />
      <Circle r={3} coord={end} stroke="red" />
      <Circle r={3} coord={c1} />
      <Circle r={3} coord={c2} />
    </React.Fragment>
  ) : null;

  return (
    <React.Fragment>
      {circles}
      <path
        d={`M ${U.toStr(start)} C ${U.toStr(c1)}, ${U.toStr(c2)}, ${U.toStr(
          end
        )}`}
        stroke="black"
        fill="transparent"
      />
    </React.Fragment>
  );
};

export default Path;
