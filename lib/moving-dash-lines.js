import React from "../_snowpack/pkg/react.js";
import Line from "./line.js";
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
export default MovingDashLines;
