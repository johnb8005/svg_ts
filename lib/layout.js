import React from "../_snowpack/pkg/react.js";
export default ({children}) => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "inline-block",
      position: "relative",
      width: "100%",
      paddingBottom: "100%",
      verticalAlign: "middle",
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement("svg", {
    version: "1.1",
    viewBox: "0 0 800 800",
    style: {
      border: "1px solid black",
      display: "inline-block",
      position: "absolute",
      top: 0,
      left: 0
    }
  }, children));
};
