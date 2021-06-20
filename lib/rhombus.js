import React from "../_snowpack/pkg/react.js";
import Segment from "./segment.js";
const Rhombus = ({c1, c2}) => {
  const S = new Segment(c1, c2);
  const x3 = S.p1.x - S.r * Math.cos(S.alpha);
  const y3 = S.p1.y + S.r * Math.sin(S.alpha);
  const x4 = S.p2.x - S.r * Math.cos(S.alpha);
  const y4 = S.p2.y + S.r * Math.sin(S.alpha);
  const points = [
    [S.p1.x, S.p1.y].join(","),
    [S.p2.x, S.p2.y].join(","),
    [x4, y4].join(","),
    [x3, y3].join(",")
  ].join(" ");
  return /* @__PURE__ */ React.createElement("polygon", {
    points,
    style: {fill: "none", stroke: "purple", strokeWidth: 1}
  });
};
export default Rhombus;
