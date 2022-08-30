import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout";
import Router from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Layout>
    <Router />
  </Layout>
);
