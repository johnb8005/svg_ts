import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { basename } from "./config";
import Layout from "./layout";

import Eye from "./eye";
import Fibonacci from "./fibonacci";
import Pi from "./pi";
import KeyboardControl from "./keyboard-control";
import Hourglass from "./hourglass";
import Color from "./color/rgb";
import Circle from "./circle";

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
    <BrowserRouter basename={basename}>
      <Layout>
        <Routes>
          <Route path="/eye" element={<Eye />} />
          <Route path="/fibonacci" element={<Fibonacci />} />
          <Route path="/pi" element={<Pi />} />
          <Route path="/keyboard-control" element={<KeyboardControl />} />
          <Route path="/hourglass" element={<Hourglass />} />
          <Route path="/color" element={<Color />} />
          <Route path={"/circle"} element={<Circle />} />
          <Route path="/" element={<Public />} />
          <Route path="/" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
