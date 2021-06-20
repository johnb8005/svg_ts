import React from "../_snowpack/pkg/react.js";
const Circle = ({
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
export default Circle;
