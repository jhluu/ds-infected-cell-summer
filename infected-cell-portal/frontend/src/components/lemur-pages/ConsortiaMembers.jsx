import React from "react";
import { Grid } from "@material-ui/core";

import cs from "./ConsortiaMembers.scss";

const ConsortiaMemberBoxes = function () {
  return (
    <Grid className={cs.container}>
      <Grid item xs={3}>
        <img className={cs.biohub} src={"../../../images/biohub.jpg"} />
      </Grid>
      <Grid item xs={3}>
        <img className={cs.stanford} src={"../../../images/stanford_logo.png"} />
      </Grid>
      <Grid item xs={3}>
        <img className={cs.mnhn} src={"../../../images/MNHN-logo.jpg"} />
      </Grid>
      <Grid item xs={3}>
        <img
          className={cs.hkust}
          src={"../../../images/hkust_logo.png"}
        />
      </Grid>
      <Grid item xs={3}>
        <img
          className={cs.cornell}
          src={"../../../images/cornell_logo.png"}
        />
      </Grid>
      <Grid item xs={3}>
        <img className={cs.amel} src={"../../../images/amel_logo.png"} />
      </Grid>
      <Grid item xs={3}>
        <img className={cs.ucsf} src={"../../../images/ucsf_logo.jpg"} />
      </Grid>
    </Grid>
  );
};

export default ConsortiaMemberBoxes;
