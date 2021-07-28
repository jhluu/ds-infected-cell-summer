import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import cs from "./About.scss";

import Heading from "./Heading.jsx";
import ConsortiaMemberBoxes from "./ConsortiaMembers.jsx";

class AboutLemur extends Component {
  render() {
    return (
      <div className={cs.content}>
        <Heading title="About" />
        <Container maxWidth="lg">
          <Box my={4}>
          <div className={cs.center}>
                <img src={"../../../images/open_lemur.png"} width="300" />
              </div>
            <div className={cs.body}>
              
            Add description of the project {" "}(
              <a href="https://www.cell.com/cell-reports/fulltext/S2211-1247(21)00173-X?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS221112472100173X%3Fshowall%3Dtrue" target="_blank">
              Kulsuptrakul et al (2021) Cell Reports
              </a>
            ).
            And more
              <p />
              and more{" "}
              <a href="/whereisthedata">Data Release Policy</a> before you use it and to reach out using the{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeWMqdbrCtSZ2U-cp7OELswEMVchPUJZ-L8REwQf3-nC0JmWQ/viewform?usp=sf_link"
                target="_blank"
              >
                contact form
              </a>
              . Redistribution of these data should include the full text of the
              data use policy.
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

export default AboutLemur;
