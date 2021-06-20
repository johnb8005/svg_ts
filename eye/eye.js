import React from "../_snowpack/pkg/react.js";
import {Circle, Square} from "../lib/index.js";
const getSquareCenter = (w, coords) => {
  const x = coords.x + w / 2;
  const y = coords.y + w / 2;
  return {x, y};
};
const Eye = ({r, w, coords}) => {
  const scoords = getSquareCenter(w, coords);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Circle, {
    r: Math.sqrt(2) * w / 2,
    coord: scoords
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: w / 2,
    coord: scoords
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: Math.sqrt(2) * w,
    coord: coords
  }), /* @__PURE__ */ React.createElement(Circle, {
    r: Math.sqrt(2) * w,
    coord: getSquareCenter(w, scoords)
  }), /* @__PURE__ */ React.createElement(Square, {
    w,
    coords
  }));
};
export default Eye;
