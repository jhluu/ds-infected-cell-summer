import React, { Component } from "react";

import { InfoBox } from "hub-ui";
import Heading from "./Heading.jsx";
import cs from "./Cellxgene.module.scss";
import { Grid } from "@material-ui/core";

class DataVizs extends Component {
  render() {
    return (
      <div>
        <div className={cs.content}>
          <Grid className={cs.container}>
            <Grid item xs={3}>
              Heatmap
              {/* <img className={cs.biohub} src={"../../../images/biohub.jpg"} /> */}
            </Grid>
            <Grid item xs={3}>
              Table view
              {/* <img className={cs.stanford} src={"../../../images/biohub.jpg"} /> */}
            </Grid>
            <Grid item xs={3}>
              Individual screen plot Pairwise comparisons
              {/* <img className={cs.mnhn} src={"../../../images/biohub.jpg"} /> */}
              <iframe src="http://127.0.0.1:8050/" width="540" height="450"></iframe>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default DataVizs;
