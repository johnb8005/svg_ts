import React from "../_snowpack/pkg/react.js";
import Layout from "../lib/layout.js";
import {Trapeze} from "../lib/index.js";
import {toHex} from "./utils.js";
import Range from "../common/range.js";
export default () => {
  const color0 = 0;
  const colorMax = (4 << 2 << 4 << 4 << 4 << 4 << 4) - 1;
  const [color, setColor] = React.useState(color0);
  const fill = "#" + toHex(color);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("code", null, "HEX: ", toHex(color), " Number: ", color), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Range, {
    value: color,
    min: color0,
    max: colorMax,
    onChange: setColor
  }), /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Trapeze, {
    p1: {x: 100, y: 50},
    p2: {x: 50, y: 200},
    p3: {x: 150, y: 200},
    fill
  })));
};
