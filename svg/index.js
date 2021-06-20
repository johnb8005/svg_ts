import React from "../_snowpack/pkg/react.js";
import Layout from "./layout.js";
import Segment from "./segment.js";
import Point from "./point.js";
import Rhombus from "./rhombus.js";
export {Layout, Segment, Point, Rhombus};
export const Circle = ({
  r = 10,
  coord = {x: 0, y: 0},
  stroke = "green"
}) => /* @__PURE__ */ React.createElement("circle", {
  r,
  cx: coord.x,
  cy: coord.y,
  stroke,
  strokeWidth: "1",
  fill: "none"
});
export const Rect = ({
  w,
  h,
  coords: {x, y} = {x: 0, y: 0}
}) => /* @__PURE__ */ React.createElement("rect", {
  width: w,
  height: h,
  x,
  y,
  style: {fill: "none", strokeWidth: 1, stroke: "rgb(0,0,0)"}
});
export const Square = ({w, coords}) => /* @__PURE__ */ React.createElement(Rect, {
  w,
  h: w,
  coords
});
export const Line = ({
  p1,
  p2,
  stroke = "orange"
}) => /* @__PURE__ */ React.createElement("line", {
  x1: p1.x,
  y1: p1.y,
  x2: p2.x,
  y2: p2.y,
  stroke,
  strokeWidth: "1"
});
export const Triangle = ({
  p1,
  p2,
  p3,
  stroke = "grey",
  fill = "none"
}) => {
  const points = [p1, p2, p3].map((p) => `${p.x},${p.y}`).join(" ");
  return /* @__PURE__ */ React.createElement("polygon", {
    points,
    style: {fill, stroke, strokeWidth: 1}
  });
};
export const Trapeze = ({
  p1,
  p2,
  p3,
  stroke = "grey",
  fill = "none"
}) => {
  const p4 = {x: p3.x + (p2.x - p1.x), y: p1.y};
  const points = [p1, p2, p3, p4].map((p) => `${p.x},${p.y}`).join(" ");
  return /* @__PURE__ */ React.createElement("polygon", {
    points,
    style: {fill, stroke, strokeWidth: 1}
  });
};
export const MovingDashLines = ({
  y0,
  y1,
  l = 8,
  x = 100,
  idx = 0,
  stroke = "purple"
}) => {
  const n = parseInt(((y1 - y0) / (2 * l)).toString()) + 1;
  const moveIdx = idx % (l * 2);
  const middle = new Array(n - 1).fill(0).map((_, i) => {
    return /* @__PURE__ */ React.createElement(Line, {
      key: i,
      p1: {x, y: y0 + (2 * i + 1) * l + moveIdx},
      p2: {x, y: y0 + 2 * i * l + moveIdx},
      stroke
    });
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Line, {
    p1: {x, y: y0 + (moveIdx > l ? moveIdx - l : 0)},
    p2: {x, y: y0},
    stroke
  }), middle, /* @__PURE__ */ React.createElement(Line, {
    p1: {x, y: y0 + (n * 2 - 1) * l},
    p2: {x, y: y0 + (n * 2 - 2) * l + (moveIdx > l ? l : moveIdx)},
    stroke
  }));
};
