import React from "../../_snowpack/pkg/react.js";
import {Circle} from "../index.js";
import * as U from "./utils.js";
const Path = ({
  start,
  end,
  curvatureRatio = 0.5,
  displayCircles = true
}) => {
  const r = Math.abs(start.x - end.x);
  const curvature = r * curvatureRatio;
  const senseX1 = U.getSenseX1(start, end);
  const senseX2 = U.getSenseX2(start, end);
  const senseY1 = U.getSenseY1(start, end);
  const senseY2 = U.getSenseY2(start, end);
  const c1 = {
    x: start.x + senseX1 * curvature,
    y: start.y + senseX2 * curvature
  };
  const c2 = {x: end.x + senseY1 * curvature, y: end.y + senseY2 * curvature};
  const circles = displayCircles ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coord: start,
    stroke: "blue"
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coord: end,
    stroke: "red"
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coord: c1
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: 3,
    coord: c2
  })) : null;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, circles, /* @__PURE__ */ React.createElement("path", {
    d: `M ${U.toStr(start)} C ${U.toStr(c1)}, ${U.toStr(c2)}, ${U.toStr(end)}`,
    stroke: "black",
    fill: "transparent"
  }));
};
export default Path;
