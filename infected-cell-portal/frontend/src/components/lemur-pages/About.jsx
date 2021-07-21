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
                <img src={"../../../images/mouse-mouse_lemur.png"} width="300" />
              </div>
            <div className={cs.body}>
              
            Native to Madagascar, mouse lemurs are the smallest, fastest reproducing, 
            and among the most abundant primates in the world, 
            and an emerging model organism for primate biology, behavior, health and conservation {" "}(
              <a href="https://www.genetics.org/content/206/2/651" target="_blank">
              Ezran et al (2017) Genetics 206, 651-664
              </a>
            ).
            Although much has been learned about their physiology and their ecology and phylogeny, 
            little is known about their cellular and molecular biology.  
            The Tabula Microcebus is the result of an international collaborative effort involving the CZ Biohub, 
            many groups at Stanford, the CNRS-MNHN (Museum National d'Histoire Naturelle in Brunoy, France), 
            and groups at HKUST, Cornell, A*STAR (Agency for Science, Technology and Research in Singapore), and UCSF. 
            We used droplet- and plate-based single cell RNA sequencing to profile over 220,000 cells 
            from 27 mouse lemur organs humanely and opportunistically obtained.  
            We defined hundreds of mouse lemur cell types and their full gene expression profiles, 
            including most classical cell types plus dozens of apparently novel cell types and cell states. 
              The atlas provides a cellular and molecular foundation for studying this primate model organism, 
              and a general approach for establishing other emerging model organisms.  
              <p />
              Tabula Microcebus is a valuable community resource and with the goal of enabling more research avenues we are making 
              the sequence data rapidly and broadly available. We ask the scientific community to please read our{" "}
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
            We are grateful for the long term collaboration of those who have been studying mouse lemurs 
            for decades and helped inspire and enable this study including colleagues at the Centre ValBio (Madagascar), 
            MNHN-Brunoy (France), Duke Lemur Center, Baylor Human Genome Center, University of Veterinary Medicine-Hannover (Germany), 
            and University of Montpellier (France).
              <p />
            </div>
          </Box>
        </Container>
      </div>
    );
  }
}

export default AboutLemur;
