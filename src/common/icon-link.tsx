import React from "react";

export default ({ name }: { name: string }) => (
  <a aria-label={name} href="https://github.com/johnb8005/svg">
    <i className={`fa fa-${name}`} aria-hidden="true" />
  </a>
);
