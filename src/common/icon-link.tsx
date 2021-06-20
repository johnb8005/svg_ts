import React from "react";

import { ghUrl } from "../config";

export default ({ name }: { name: string }) => (
  <a aria-label={name} href={ghUrl}>
    <i className={`fa fa-${name}`} aria-hidden="true" />
  </a>
);
