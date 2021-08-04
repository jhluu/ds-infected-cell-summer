import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

import cs from "./DataAccess.module.scss";

import Heading from "./Heading.jsx";
import { InfoBox } from "hub-ui";

import VirusSummary from "../crispr-studies-summary/CrisprStudiesSummary.jsx";

class DataAccess extends Component {
  render() {
    return (
      <div className={cs.content}>
        <Heading title="Data Release Policy" />
        <Container maxWidth="lg">
          <Box my={4}>
            <div className={cs.body}>
              Our goal is to make sequence data rapidly and broadly available to
              the scientific community as a community resource. It is our
              intention to publish the work of this project in a timely fashion,
              and we welcome collaborative interaction on the project and
              analyses. However, considerable investment was made in generating
              these data and we ask that you respect rights of first publication
              and acknowledgment as outlined in the Toronto agreement (Toronto
              International Data Release Workshop Authors. Prepublication data
              sharing.{" "}
              <a href="https://www.nature.com/articles/461168a" target="_blank">
                Nature. 2009 Sep 10;461(7261):168-70
              </a>
              ). By accessing these data, you agree not to publish any articles
              prior to initial publication by the
              Infected Cell Consortium and its collaborating scientists. If
              you wish to make use of restricted data for publication or are
              interested in collaborating on the analyses of these data, please
              use the{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWMqdbrCtSZ2U-cp7OELswEMVchPUJZ-L8REwQf3-nC0JmWQ/viewform?usp=sf_link"
                target="_blank"
              >
                contact form
              </a>
              . Redistribution of these data should include the full text of the
              data use policy.
            </div>
          </Box>
        </Container>

        <Heading title="Data summary" />
        <div className={cs.body}>
          {" "}
          <p></p> Data in this table is summarized from the project metadata.
        </div>
        <VirusSummary />
        
      </div>
    );
  }
}

export default DataAccess;
