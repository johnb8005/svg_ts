import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import {Layout} from "../lib/index.js";
import {PathWSquare} from "../lib/path.js";
import * as U from "./utils.js";
const FiboPaths = ({
  nIter,
  w,
  displayCircles,
  displaySquares,
  curvatureRatio
}) => /* @__PURE__ */ React.createElement(Layout, null, U.computeDirections(nIter).map((_, j) => /* @__PURE__ */ React.createElement(PathWSquare, {
  key: j,
  start: {x: 400 + _.dx1 * w, y: 300 + _.dy1 * w},
  end: {x: 400 + _.dx2 * w, y: 300 + _.dy2 * w},
  displaySquares,
  displayCircles,
  curvatureRatio
})));
export default () => {
  const [curvatureRatio, setCurvatureRatio] = useState(U.goldenRatio - 1);
  const [displaySquares, setDisplaySquares] = useState(true);
  const [displayCircles, setDisplayCircles] = useState(true);
  const [nIter, setNIter] = useState(21);
  const [w, setW] = useState(0.4);
  const [animationOn, setAnimationOn] = useState(false);
  const wMax = 10;
  const wMin = 0.01;
  useEffect(() => {
    document.title = "Fibonacci";
  }, []);
  const keepAnimationRunning = () => {
    const wInc = 0.1;
    const dt = 100;
    if (animationOn === true) {
      if (wMax > w) {
        setTimeout(() => {
          setW(w + wInc);
        }, dt);
      } else {
        setAnimationOn(false);
      }
    }
  };
  keepAnimationRunning();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Curvature ratio:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: 0,
    max: 100,
    onChange: (e) => setCurvatureRatio(Number(e.target.value) / 100)
  }), " ", /* @__PURE__ */ React.createElement("code", null, curvatureRatio.toFixed(2))), /* @__PURE__ */ React.createElement("li", null, "Display square:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: displaySquares,
    onChange: () => setDisplaySquares(!displaySquares)
  })), /* @__PURE__ */ React.createElement("li", null, "Display circles:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: displayCircles,
    onChange: () => setDisplayCircles(!displayCircles)
  })), /* @__PURE__ */ React.createElement("li", null, "# iterations:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    value: nIter,
    onChange: (e) => setNIter(Number(e.target.value))
  })), /* @__PURE__ */ React.createElement("li", null, "w:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: wMin * 100,
    max: wMax * 100,
    value: w * 100,
    onChange: (e) => setW(Number(e.target.value) / 100)
  })), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    onClick: () => {
      setW(wMin);
      setAnimationOn(true);
    }
  }, "Launch Animation"))), /* @__PURE__ */ React.createElement(FiboPaths, {
    nIter,
    displaySquares,
    displayCircles,
    curvatureRatio,
    w
  }));
};
