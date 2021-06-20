import React, {useState, useEffect} from "../_snowpack/pkg/react.js";
import {Layout} from "../svg/index.js";
import {PathWSquare} from "../svg/path.js";
const goldenRatio = (1 + Math.sqrt(5)) / 2;
const getDirection = (i, offset = 0) => {
  if (i % 4 === offset % 4 || i % 4 === (offset + 1) % 4) {
    return 1;
  }
  return -1;
};
const computeDirections = (nIter) => {
  let dx1 = 0;
  let dy1 = 0;
  let dx2 = 1;
  let dy2 = 1;
  const init = {dx1, dy1, dx2, dy2};
  let f1 = 0;
  let f2 = 0;
  const r = Array(nIter).fill(0).map((_, j) => {
    const i = j + 1;
    const t = f2 === 0 ? 1 : f1 + f2;
    dx1 += t * getDirection(i, 1);
    dy1 += t * getDirection(i);
    dx2 += (t + f2) * getDirection(i);
    dy2 += (t + f2) * getDirection(i, 3);
    f1 = f2;
    f2 = t;
    return {dx1, dy1, dx2, dy2};
  });
  return [init].concat(r);
};
const FiboPaths = (props) => {
  const {nIter, w, displayCircles, displaySquares, curvatureRatio} = props;
  return /* @__PURE__ */ React.createElement(Layout, null, computeDirections(nIter).map((_, j) => /* @__PURE__ */ React.createElement(PathWSquare, {
    key: j,
    start: {x: 400 + _.dx1 * w, y: 300 + _.dy1 * w},
    end: {x: 400 + _.dx2 * w, y: 300 + _.dy2 * w},
    displaySquares,
    displayCircles,
    curvatureRatio
  })));
};
export default (props) => {
  const [curvatureRatio, setCurvatureRatio] = useState(goldenRatio - 1);
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Curvature ratio: ", /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: 0,
    max: 100,
    onChange: (e) => setCurvatureRatio(Number(e.target.value) / 100)
  }), " ", /* @__PURE__ */ React.createElement("code", null, curvatureRatio.toFixed(2))), /* @__PURE__ */ React.createElement("li", null, "Display square: ", /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: displaySquares,
    onChange: () => setDisplaySquares(!displaySquares)
  })), /* @__PURE__ */ React.createElement("li", null, "Display circles: ", /* @__PURE__ */ React.createElement("input", {
    type: "checkbox",
    checked: displayCircles,
    onChange: () => setDisplayCircles(!displayCircles)
  })), /* @__PURE__ */ React.createElement("li", null, "# iterations: ", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    value: nIter,
    onChange: (e) => setNIter(Number(e.target.value))
  })), /* @__PURE__ */ React.createElement("li", null, "w: ", /* @__PURE__ */ React.createElement("input", {
    type: "range",
    min: wMin * 100,
    max: wMax * 100,
    value: w * 100,
    onChange: (e) => setW(Number(e.target.value / 100))
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
