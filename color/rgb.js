import React from "../_snowpack/pkg/react.js";
import Layout from "../lib/layout.js";
import {Trapeze} from "../lib/index.js";
import {toColor, toHex} from "./utils.js";
import Range from "../common/range.js";
export default () => {
  const color0 = 0;
  const colorMax = (4 << 2 << 4) - 1;
  const [red, setRed] = React.useState(color0);
  const [green, setGreen] = React.useState(color0);
  const [blue, setBlue] = React.useState(color0);
  const color = toColor(red, green, blue);
  const fill = `rgb(${red}, ${green}, ${blue})`;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("code", null, "HEX: #", toHex(color), " Number: ", color), /* @__PURE__ */ React.createElement("br", null), "R: ", /* @__PURE__ */ React.createElement(Range, {
    value: red,
    min: color0,
    max: colorMax,
    onChange: setRed
  }), " ", red, /* @__PURE__ */ React.createElement("br", null), "G: ", /* @__PURE__ */ React.createElement(Range, {
    value: green,
    min: color0,
    max: colorMax,
    onChange: setGreen
  }), " ", green, " ", /* @__PURE__ */ React.createElement("br", null), "B: ", /* @__PURE__ */ React.createElement(Range, {
    value: blue,
    min: color0,
    max: colorMax,
    onChange: setBlue
  }), blue, " ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Trapeze, {
    p1: {x: 100, y: 50},
    p2: {x: 50, y: 200},
    p3: {x: 150, y: 200},
    fill
  })));
};
