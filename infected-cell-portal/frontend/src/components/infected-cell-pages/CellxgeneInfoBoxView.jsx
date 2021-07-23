import React, { Component } from "react";

import { InfoBox } from "hub-ui";
import Heading from "./Heading.jsx";
import cs from "./Cellxgene.scss";

class CellxgeneInfoBoxView extends Component {
  render() {
    return (
      <div>
      <div className={cs.content}>
        <Heading title="Mouse lemur" />
        <InfoBox
          title={"The infected cell"}
          description={"The Infected Cell, an atlas of viral infection"}
          buttonTitle="Read more about it"
          buttonLink="https://opencell.czbiohub.org/"
          openInNewTab={true}
          image={"../../images/opencell_logo.png"}
        />
      </div>
      </div>
    );
  }
}

export default CellxgeneInfoBoxView;
