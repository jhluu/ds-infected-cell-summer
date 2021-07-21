import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import Heading from "./Heading.jsx";

import MySankeyComponent from "../sankey-components/SankeyAll.jsx";
import MySankeyEpithelialComponent from "../sankey-components/SankeyEpithelial.jsx";
import MySankeyEndothelialComponent from "../sankey-components/SankeyEndothelial.jsx";
import MySankeyStromalComponent from "../sankey-components/SankeyStromal.jsx";
import MySankeyImmuneComponent from "../sankey-components/SankeyImmune.jsx";

import { InfoBox } from "hub-ui";

import cs from "./CellTypes.scss";

class CellTypesComponent extends Component {
  render() {
    return (
      <div className={cs.content}>
        <Heading title="MARKER GENES" />
        <InfoBox
          title={"OnClass marker genes"}
          description={
            "computationally derived marker genes for all cell types in the cell ontology and companion hierarchical differential gene expression for the cell types in Tabula Microcebus"
          }
          buttonTitle="Launch OnClass"
          buttonLink="http://tabula-microcebus-onclass.ds.czbiohub.org/"
          openInNewTab={true}
          image={"../../images/sapiens_onclass.png"}
        />
        <div id="all-sankeys">
          <Heading title="Cell types in Tabula Sapiens" />
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} alignItems="center" justify="center">
              <MySankeyComponent />
            </Grid>
          </Grid>
          <Heading title="Cell types per functional compartment" />
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={6}>
              <MySankeyEpithelialComponent />
            </Grid>
            <Grid item xs={6}>
              <MySankeyImmuneComponent />
            </Grid>
            <Grid item xs={6}>
              <MySankeyEndothelialComponent />
            </Grid>
            <Grid item xs={6}>
              <MySankeyStromalComponent />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CellTypesComponent;
