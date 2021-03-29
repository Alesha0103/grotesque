import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Loader from "./components/loader";

const Pages = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./components/my-router")), 1000);
    })
);

ReactDOM.render(
  <Router>
    <Header />
    <Suspense fallback={<Loader />}>
      <Pages />
    </Suspense>
    <Footer />
  </Router>,
  document.getElementById("root")
);
