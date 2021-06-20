import React from "../_snowpack/pkg/react.js";
import {ghUrl} from "../config.js";
export default ({name}) => /* @__PURE__ */ React.createElement("a", {
  "aria-label": name,
  href: ghUrl
}, /* @__PURE__ */ React.createElement("i", {
  className: `fa fa-${name}`,
  "aria-hidden": "true"
}));
