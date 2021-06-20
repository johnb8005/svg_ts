import React from "../_snowpack/pkg/react.js";
const Trapeze = ({
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
export default Trapeze;
