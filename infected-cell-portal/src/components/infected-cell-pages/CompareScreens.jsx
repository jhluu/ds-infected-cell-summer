import React, { Component } from "react";

import { InfoBox } from "hub-ui";
import Heading from "./Heading.jsx";
import cs from "./Cellxgene.module.scss";
import { Grid } from "@material-ui/core";

class CompareScreens extends Component {
  render() {
    return (
      <div className={cs.content}>
          <Heading title="Pairwise Comparisons" />
      </div>
    );
  }
}

export default CompareScreens;