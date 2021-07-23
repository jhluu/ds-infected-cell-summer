import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import {
  BiohubUI,
  Banner,
  Footer,
  NavBar,
  Link as CZUILink,
} from "cz-ui";

import AboutLemur from "./infected-cell-pages/About.jsx";
import DataAccess from "./infected-cell-pages/DataAccess.jsx";
import CellxgeneInfoBoxView from "./infected-cell-pages/CellxgeneInfoBoxView.jsx";
import DataVizs from "./infected-cell-pages/DataVizs.jsx";

import cs from "./appIC.scss";
import { StylesProvider } from "@material-ui/core/styles";

class AppInfectedCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    return (
      <StylesProvider injectFirst>
        <BiohubUI>
          <Router basename="/">
            <div class={cs.layout}>
              <div class={cs.content}>
                <NavBar
                  accent
                  title={"Infected Cell"}
                  navLinks={[
                    <CZUILink
                      component={Link}
                      to="/home"
                      onClick={() => this.setState({ selectedIndex: 0 })}
                    >
                      HOME
                    </CZUILink>,
                    <CZUILink
                      component={Link}
                      to="/about"
                      onClick={() => this.setState({ selectedIndex: 1 })}
                    >
                      ABOUT
                    </CZUILink>,
                    <CZUILink
                      component={Link}
                      to="/whereisthedata"
                      onClick={() => this.setState({ selectedIndex: 2 })}
                    >
                      DATA
                    </CZUILink>,
                    <CZUILink
                      component={Link}
                      to="/datavizs"
                      onClick={() => this.setState({ selectedIndex: 3 })}
                    >
                      DATA VIZS
                    </CZUILink>,
                  ]}
                  navSelectedLinkIndex={this.state.selectedIndex}
                />
                <Switch>
                  <Route path="/about">
                    <AboutLemur />
                  </Route>
                  <Route path="/whereisthedata">
                    <DataAccess />
                  </Route>
                  <Route path="/datavizs">
                    <DataVizs />
                  </Route>
                  <Route path="/">
                    <Banner
                      backgroundUrl={"../../images/opencell_logo.png"}
                      mainText="Infected Cell"
                      paragraph="portal for the infected cell project"
                    />
                    <CellxgeneInfoBoxView />
                  </Route>
                </Switch>
              </div>

              <div className={cs.footer}>
                <Footer
                  navLinks={[
                    <CZUILink href="/">HOME</CZUILink>,
                    <CZUILink href="http://www.czbiohub.org/" target="_blank">
                      CZ BIOHUB
                    </CZUILink>,
                    <CZUILink
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeWMqdbrCtSZ2U-cp7OELswEMVchPUJZ-L8REwQf3-nC0JmWQ/viewform?usp=sf_link"
                      target="_blank"
                    >
                      CONTACT US
                    </CZUILink>,
                  ]}
                />
              </div>
            </div>
          </Router>
        </BiohubUI>
      </StylesProvider>
    );
  }
}

export default AppInfectedCell;
