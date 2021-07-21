import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import {
  BiohubUI,
  Banner,
  Footer,
  NavBar,
  Link as CZUILink,
} from "cz-ui";

import AboutLemur from "./lemur-pages/About.jsx";
import DataAccess from "./lemur-pages/DataAccess.jsx";
import CellxgeneInfoBoxView from "./lemur-pages/CellxgeneInfoBoxView.jsx";
import CellxgeneInfoBoxEdit from "./lemur-pages/CellxgeneInfoBoxEdit.jsx";
import CellTypesComponent from "./lemur-pages/CellTypes.jsx";

import cs from "./appLEMUR.scss";
import { StylesProvider } from "@material-ui/core/styles";

class AppLEMUR extends Component {
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
                  title={"Tabula Microcebus"}
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
                      to="/organs"
                      onClick={() => this.setState({ selectedIndex: 4 })}
                    >
                      ORGANS
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
                  <Route path="/organs">
                    <CellxgeneInfoBoxEdit />
                  </Route>
                  <Route path="/">
                    <Banner
                      backgroundUrl={"../../images/lemur_banner.png"}
                      mainText="Tabula Microcebus"
                      paragraph="Primate transcriptome reference single cell atlas"
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

export default AppLEMUR;
