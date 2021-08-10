import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import cs from "./About.module.scss";

import Heading from "./Heading.jsx";
import ConsortiaMemberBoxes from "./ConsortiaMembers.jsx";

class AboutIC extends Component {
  render() {
    return (
      <div className={cs.content}>
        <Heading title="About" />
        <Container maxWidth="lg">
          <Box my={4}>
            
            <div className={cs.body}>
              The Infected Cell Project presents a unique oppotunity to understand
              <li> <b>viruses as a threat:</b> defining essential host pathways for infection 
              and building assays for anti-viral screening</li>
              <li> <b>viruses as a tool:</b> following viruses to illuminate human cell biology </li>
              <li> <b>viruses as a forcing function:</b> to integrate Biohub’s multi-disciplinary expertise</li>
              
              <p />
              The challenge we aim to solve is how can we build approaches that can address both the diversity 
              of viral families and the diversity of cellular responses that they generate. 
              
              <p />
              This current version of the Infected Cell Project utilizes CRISPR screen data from 10+ families 
              of viruses in order to explore host-factor interactions. This enhances our understanding 
              of the mechanisms of viral infection and helps to develop new technologies that 
              will lead to actionable diagnostics and effective therapies. 
              <div className={cs.center}>
              <img src={"../../../images/opencell_logo.png"} width="300" />
              </div>

              <p />
              Our goal is to make sequence data rapidly and broadly available to the scientific community 
              as a community resource. Before you use our data, please read our <a href="/whereisthedata">Data Release Policy </a>
              and feel free to reach out to our group using the{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWMqdbrCtSZ2U-cp7OELswEMVchPUJZ-L8REwQf3-nC0JmWQ/viewform?usp=sf_link"
                target="_blank"
              >
                contact form.
              </a>
            </div>
          </Box>
        </Container>

        <Heading title="Consortium Members" />
        <ConsortiaMemberBoxes />

        <Heading title="Acknowledgments" />
        <Container maxWidth="lg">
          <Box my={4}>
            <div className={cs.body}>
              thank you thank you thank you
              <p />
            </div>
          </Box>
        </Container>
      </div>
    );
  }
}

export default AboutIC;
