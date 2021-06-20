import React from "../../_snowpack/pkg/react.js";
import {Square} from "../index.js";
import Path from "./ui.js";
export const PathWSquare = ({
  start,
  end,
  curvatureRatio = 0.5,
  displaySquares = true,
  displayCircles = true
}) => {
  const w = Math.abs(start.x - end.x);
  const coords = {x: Math.min(start.x, end.x), y: Math.min(start.y, end.y)};
  const square = displaySquares ? /* @__PURE__ */ React.createElement(Square, {
    w,
    coords
  }) : null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, square, /* @__PURE__ */ React.createElement(Path, {
    start,
    end,
    curvatureRatio,
    displayCircles
  }));
};
export default PathWSquare;
