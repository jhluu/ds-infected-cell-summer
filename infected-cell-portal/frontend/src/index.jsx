import React from "react";
import ReactDOM from "react-dom";
import AppLEMUR from "./components/appLEMUR.jsx";

import ReactGA from "react-ga";
ReactGA.initialize("UA-195392596-1", {
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});

ReactGA.pageview(window.location.pathname + window.location.search);

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <AppLEMUR />
  </BrowserRouter>,

  document.getElementById("root")
);
