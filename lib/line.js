import React from "../_snowpack/pkg/react.js";
const Line = ({
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
export default Line;
