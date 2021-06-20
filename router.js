import React from "./_snowpack/pkg/react.js";
import {Route, Switch} from "./_snowpack/pkg/react-router-dom.js";
import Eye from "./eye/index.js";
import Fibonacci from "./fibonacci/index.js";
import Pi from "./pi/index.js";
import KeyboardControl from "./keyboard-control/index.js";
import Hourglass from "./hourglass/index.js";
import Color from "./color/rgb.js";
const NotFound = () => /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "Page Not Found"));
const Public = () => /* @__PURE__ */ React.createElement("p", null, "Browse to the different pages via the menu", " ", /* @__PURE__ */ React.createElement("i", {
  className: "fa fa-arrow-right",
  style: {
    transform: "rotate(-45deg)"
  }
}));
export default () => {
  return /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "/eye",
    component: Eye
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/fibonacci",
    component: Fibonacci
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/pi",
    component: Pi
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/keyboard-control",
    component: KeyboardControl
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/hourglass",
    component: Hourglass
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/color",
    component: Color
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: Public
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/",
    component: NotFound
  }));
};
