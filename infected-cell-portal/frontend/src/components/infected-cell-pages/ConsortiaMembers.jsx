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
        <img className={cs.stanford} src={"../../../images/biohub.jpg"} />
      </Grid>
      <Grid item xs={3}>
        <img className={cs.mnhn} src={"../../../images/biohub.jpg"} />
      </Grid>
    </Grid>
  );
};

export default ConsortiaMemberBoxes;
