import React from "react";
import { Route, Switch } from "react-router-dom";

import Eye from "./eye";
import Fibonacci from "./fibonacci";
import Pi from "./pi";
import KeyboardControl from "./keyboard-control";
import Hourglass from "./hourglass";
import Color from "./color/rgb";

const NotFound = () => (
  <p>
    <i>Page Not Found</i>
  </p>
);

const Public = () => (
  <p>
    Browse to the different pages via the menu{" "}
    <i
      className="fa fa-arrow-right"
      style={{
        transform: "rotate(-45deg)",
      }}
    ></i>
  </p>
);

export default () => {
  return (
    <Switch>
      <Route path="/eye" component={Eye} />
      <Route path="/fibonacci" component={Fibonacci} />
      <Route path="/pi" component={Pi} />
      <Route path="/keyboard-control" component={KeyboardControl} />
      <Route path="/hourglass" component={Hourglass} />
      <Route path="/color" component={Color} />
      <Route path="/" component={Public} />
      <Route path="/" component={NotFound} />
    </Switch>
  );
};
