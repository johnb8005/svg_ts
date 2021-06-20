import React from "../_snowpack/pkg/react.js";
import Layout from "../svg/layout.js";
import {Trapeze, Triangle, MovingDashLines} from "../svg/index.js";
export default () => {
  const h0 = 53;
  const hMax = 125;
  const [h, setHeight] = React.useState(h0);
  const x1FromY = (y) => {
    const m = (125 - 50) / (100 - 50);
    const q = 125 - m * 100;
    return (y - q) / m;
  };
  const x2FromY = (y) => {
    const m = (125 - 50) / (100 - 150);
    const q = 125 - m * 100;
    return (y - q) / m;
  };
  if (h < hMax) {
    setTimeout(() => {
      setHeight(h + 1);
    }, 100);
  } else {
    setHeight(h0);
  }
  const hTrapeze = 250 - h;
  const fill = "grey";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("input", {
    type: "range",
    value: h,
    min: h0,
    max: hMax,
    onChange: (e) => {
      const x = Number(e.target.value);
      setHeight(x);
    }
  }), /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Triangle, {
    p1: {x: 50, y: 50},
    p2: {x: 150, y: 50},
    p3: {x: 100, y: 125}
  }), /* @__PURE__ */ React.createElement(Triangle, {
    p1: {x: 50, y: 200},
    p2: {x: 150, y: 200},
    p3: {x: 100, y: 125}
  }), /* @__PURE__ */ React.createElement(Triangle, {
    p1: {x: x1FromY(h), y: h},
    p2: {x: x2FromY(h), y: h},
    p3: {x: 100, y: 125},
    fill
  }), /* @__PURE__ */ React.createElement(Trapeze, {
    p1: {x: x2FromY(hTrapeze), y: hTrapeze},
    p2: {x: 50, y: 200},
    p3: {x: 150, y: 200},
    fill
  }), /* @__PURE__ */ React.createElement(MovingDashLines, {
    idx: h + 3,
    y0: 125,
    y1: 200,
    stroke: fill
  })));
};
