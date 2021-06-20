import React from "../_snowpack/pkg/react.js";
const Triangle = ({
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
export default Triangle;
