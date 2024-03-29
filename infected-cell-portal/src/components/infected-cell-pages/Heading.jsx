import React from "react";
import { Divider } from "@material-ui/core";

import cs from "./Heading.module.scss";

const Heading = function (props) {
  return (
    <div>
      <div className={cs.heading}>{props.title}</div>
      <Divider />
    </div>
  );
};

export default Heading;
