import React from "../_snowpack/pkg/react.js";
export default ({
  min,
  max,
  value,
  onChange
}) => /* @__PURE__ */ React.createElement("input", {
  type: "range",
  value,
  min,
  max,
  onChange: (e) => {
    const x = Number(e.target.value);
    onChange(x);
  }
});
