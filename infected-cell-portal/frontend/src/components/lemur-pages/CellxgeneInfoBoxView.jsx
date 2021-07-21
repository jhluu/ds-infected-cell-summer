import React, { Component } from "react";

// import { Banner, Link as CZUILink } from "cz-ui";
import { InfoBox } from "hub-ui";

// import InfoBox from "~/components/basic/InfoBox.jsx";
import { Grid } from "@material-ui/core";
import Heading from "./Heading.jsx";
import cs from "./Cellxgene.scss";

class CellxgeneInfoBoxView extends Component {
  render() {
    return (
      <div>
      <div className={cs.content}>
        <Heading title="Mouse lemur" />
        <InfoBox
          title={"Microcebus murinus"}
          description={"The Mouse Lemur, a Genetic Model Organism for Primate Biology, Behavior, Health, and Conservation"}
          buttonTitle="Read more about it"
          buttonLink="https://www.genetics.org/content/206/2/651"
          openInNewTab={true}
          image={"../../images/cover-source.jpg"}
        />
      </div>
        <div className={cs.content}>
          <Heading title="TABULA MICROCEBUS" />
          <InfoBox
            title={"Complete Dataset"}
            description={"cellxgene session for the complete atlas"}
            buttonTitle="Launch"
            buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/all/"
            openInNewTab={true}
            image={"../../images/umap_tissue_logo.png"}
          />
        </div>
      </div>
    );
  }
}

export default CellxgeneInfoBoxView;
