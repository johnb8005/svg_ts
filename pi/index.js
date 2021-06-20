import React, {useState} from "../_snowpack/pkg/react.js";
import {Layout, Circle, Square} from "../lib/index.js";
const isInCircle = (p, circleC, r) => Math.pow(p.x - circleC.x, 2) + Math.pow(p.y - circleC.y, 2) < Math.pow(r, 2);
export default () => {
  const r = 200;
  const offset = 30;
  const circleC = {x: offset + r, y: offset + r};
  const squareC = {x: offset, y: offset};
  const [nPeas, setNpeas] = useState(50);
  const peas = Array(nPeas).fill(0).map((_) => {
    const x = Math.random() * r * 2 + offset;
    const y = Math.random() * r * 2 + offset;
    return {x, y};
  });
  const l = peas.map((p) => isInCircle(p, circleC, r)).filter((_) => _ === true).length;
  const piApprox = 4 * l / nPeas;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Monte Carlo Simulation of PI"), /* @__PURE__ */ React.createElement("p", null, "See", " ", /* @__PURE__ */ React.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Monte_Carlo_method#Overview"
  }, "Monte Carlo method on wikipedia"), "."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "# of peas:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: "10",
    max: "5000",
    value: nPeas,
    onChange: (e) => setNpeas(Number(e.target.value))
  }), /* @__PURE__ */ React.createElement("code", null, nPeas)), /* @__PURE__ */ React.createElement("li", null, "Pi appromximation: ", /* @__PURE__ */ React.createElement("code", null, piApprox), " vs ", /* @__PURE__ */ React.createElement("code", null, Math.PI)), /* @__PURE__ */ React.createElement("li", null, "Pi precision:", " ", /* @__PURE__ */ React.createElement("code", null, (100 * (piApprox - Math.PI) / Math.PI).toFixed(2), "%"))), /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Circle, {
    r,
    coord: circleC
  }), /* @__PURE__ */ React.createElement(Square, {
    w: r * 2,
    coords: squareC
  }), peas.map((p, i) => /* @__PURE__ */ React.createElement(Circle, {
    stroke: isInCircle(p, circleC, r) ? "red" : "blue",
    key: i,
    r: 0.1,
    coord: p
  }))));
};
