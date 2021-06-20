import React from "../_snowpack/pkg/react.js";
import Layout from "../lib/layout.js";
import {Circle, Line, MovingDashLines} from "../lib/index.js";
export default () => {
  const [height, setHeight] = React.useState(0);
  const [lr, setLr] = React.useState(0);
  const [moveIdx, setMoveIdx] = React.useState(0);
  const [dx, setDx] = React.useState(1);
  const steer = (keyCode, keyCodeSet, max, value, setValue) => {
    const [kInc, kDec] = keyCodeSet;
    if (keyCode === kInc && value < max) {
      setValue(value + 1);
    }
    if (keyCode === kDec && value > -max) {
      setValue(value - 1);
    }
  };
  const onKeyDown = (a) => {
    steer(a.keyCode, [38, 40], 30, height, setHeight);
    steer(a.keyCode, [37, 39], 30, lr, setLr);
    const d = 1 + Math.abs(height);
    setDx(d);
  };
  setTimeout(() => {
    setMoveIdx(moveIdx + dx);
  }, 50);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("textarea", {
    onKeyDown
  }), /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Circle, {
    coord: {x: 100, y: 100},
    r: 50
  }), /* @__PURE__ */ React.createElement(Line, {
    p1: {x: 70, y: 100 + height},
    p2: {x: 130, y: 100 + height}
  }), /* @__PURE__ */ React.createElement(Line, {
    p1: {x: 100 + lr, y: 70},
    p2: {x: 100 + lr, y: 130}
  }), /* @__PURE__ */ React.createElement(Line, {
    p1: {x: 90, y: 100},
    p2: {x: 110, y: 100},
    stroke: "grey"
  }), /* @__PURE__ */ React.createElement(Line, {
    p1: {x: 100, y: 90},
    p2: {x: 100, y: 110},
    stroke: "grey"
  }), /* @__PURE__ */ React.createElement(Line, {
    p1: {x: 200, y: 150},
    p2: {x: 210, y: 50},
    stroke: "grey"
  }), /* @__PURE__ */ React.createElement(Line, {
    p1: {x: 260, y: 150},
    p2: {x: 250, y: 50},
    stroke: "grey"
  }), /* @__PURE__ */ React.createElement(MovingDashLines, {
    y0: 50,
    y1: 145,
    l: 20,
    x: 230,
    idx: moveIdx,
    stroke: "grey"
  })));
};
