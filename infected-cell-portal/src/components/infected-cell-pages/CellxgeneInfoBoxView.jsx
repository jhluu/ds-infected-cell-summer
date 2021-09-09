import React, { Component } from "react";

import { InfoBox } from "hub-ui";
import { Banner } from "cz-ui";
import Heading from "./Heading.jsx";
import cs from "./Cellxgene.module.scss";

class CellxgeneInfoBoxView extends Component {
  render() {
    return (
      <div>
        <Banner
          backgroundUrl={"../../images/opencell_logo.png"}
          mainText="Infected Cell"
          paragraph="Portal for the infected cell project"
        />
        <div className={cs.content}>
          <Heading title="ABOUT" />
          <div className={cs.body}>
            <p>
            As the COVID-19 pandemic has shown, infectious diseases and emerging new viruses remain a major 
            threat to human health. Our goals are to understand virus-host interactions as a guide to 
            developing antiviral therapeutics, to develop vaccines that can prevent infection, to preemptively 
            identify emerging viruses, and to disseminate the technologies needed to diagnose and discover the 
            source of microbial infections in the developing world.
            </p>
            
          </div>
          <InfoBox
            title={"The Infected Cell"}
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
