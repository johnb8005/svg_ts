import React from "../_snowpack/pkg/react.js";
const Rect = ({
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
export default Rect;
