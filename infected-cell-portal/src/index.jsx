import React from "react";
import ReactDOM from "react-dom";
import AppLEMUR from "./components/appIC.jsx";
import { BrowserRouter, withRouter } from "react-router-dom";

import ReactGA from "react-ga";
ReactGA.initialize("UA-195392596-1", {
  titleCase: false,
  gaOptions: {
    siteSpeedSampleRate: 100,
  },
});

// ReactGA.pageview(window.location.pathname + window.location.search);

const AppLEMURWithRouter = withRouter((props) => <AppLEMUR {...props} />);

ReactDOM.render(
  <BrowserRouter>
    <AppLEMURWithRouter />
  </BrowserRouter>,

  document.getElementById("root")
);
