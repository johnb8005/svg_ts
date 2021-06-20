import React from "../_snowpack/pkg/react.js";
import {Square, Circle} from "./index.js";
export const toStr = (s) => s.x + " " + s.y;
export const getSenseX1 = (start, end) => {
  if (start.x > end.x && start.y < end.y) {
    return -1;
  }
  if (start.x < end.x && start.y > end.y) {
    return 1;
  }
  return 0;
};
export const getSenseY2 = (start, end) => {
  if (start.x > end.x && start.y < end.y) {
    return -1;
  }
  if (start.x < end.x && start.y > end.y) {
    return 1;
  }
  return 0;
};
export const getSenseX2 = (start, end) => {
  if (start.x < end.x && start.y < end.y) {
    return 1;
  }
  if (start.x > end.x && start.y > end.y) {
    return -1;
  }
  return 0;
};
export const getSenseY1 = (start, end) => {
  if (start.x < end.x && start.y < end.y) {
    return -1;
  }
  if (start.x > end.x && start.y > end.y) {
    return 1;
  }
  return 0;
};
const Path = (props) => {
  const {start, end, curvatureRatio = 0.5, displayCircles = true} = props;
  const r = Math.abs(start.x - end.x);
  const curvature = r * curvatureRatio;
  const senseX1 = getSenseX1(start, end);
  const senseX2 = getSenseX2(start, end);
  const senseY1 = getSenseY1(start, end);
  const senseY2 = getSenseY2(start, end);
  const c1 = {x: start.x + senseX1 * curvature, y: start.y + senseX2 * curvature};
  const c2 = {x: end.x + senseY1 * curvature, y: end.y + senseY2 * curvature};
  const circles = displayCircles ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coords: start,
    stroke: "blue"
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coords: end,
    stroke: "red"
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coords: c1
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coords: c2
  })) : null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, circles, /* @__PURE__ */ React.createElement("path", {
    d: `M ${toStr(start)} C ${toStr(c1)}, ${toStr(c2)}, ${toStr(end)}`,
    stroke: "black",
    fill: "transparent"
  }));
};
export default Path;
export const PathWSquare = (props) => {
  const {start, end, curvatureRatio = 0.5, displaySquares = true, displayCircles = true} = props;
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
