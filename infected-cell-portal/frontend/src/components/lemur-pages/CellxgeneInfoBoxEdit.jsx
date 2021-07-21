import React, { Component } from "react";

import { Button, Link as CZUILink } from "cz-ui";
import { InfoBox } from "hub-ui";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

import Heading from "./Heading.jsx";
import cs from "./Cellxgene.scss";


class CellxgeneInfoBoxEdit extends Component {
  render() {
    return (
      <div>
        <div className={cs.content}>
          <Heading title="Dataset walkthrough" />
          <Container maxWidth="lg">
            <Box my={4}>
              <div className={cs.body}>
                These cellxgene sessions enable you to reannotate the data using
                the browser. <p></p>
                The following metadata categories are available:
                <ul>
                  <li>
                    <b>method</b>: smartseq2 (full-length) or 10x (3prime)
                  </li>
                  <li>
                    <b>individual</b>: lemur individuals available in the dataset. For
                    details see the{" "}
                    <a href="/whereisthedata">lemur characteristics summary</a>.
                  </li>
                  <li>
                    <b>tissue</b>: list of organs and tissues available in the atlas.
                  </li>
                  <li>
                    <b>subtissue</b>: list of subtissues available in the atlas.
                  </li>
                  <li>
                    <b>compartment</b>: functional compartment for each cell type.
                  </li>
                  <li>
                    <b>cell_ontology_class</b>: cell type annotations using the Cell
                    Ontology.
                  </li>
                  <li>
                    <b>free_annotation</b>: detailed cell type annotations using free text and molecular markers (when available).
                  </li>
                  <li>
                    <b>nCount_RNA</b>: number of raw counts (smartseq2) or UMIs  (10x) per cell.
                  </li>
                  <li>
                    <b>nFeature_RNA</b>: number of genes per cell.
                  </li>
                </ul>
                <p />
                The following numeric layers are available:
                <ul>
                  <li>
                    <b>Raw counts</b>: raw, not normalized counts.
                  </li>
                  <li>
                    <b>
                      <i>.X</i>
                    </b>{" "}
                    normalized, not scaled, counts.
                  </li>
                </ul>
                <p />
                You will find below a link for each organ available in Tabula
                Microcebus. If you would like to contribute please use this button
                to complete the required google form.
                <p />
                <Button
                  size="small"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeWMqdbrCtSZ2U-cp7OELswEMVchPUJZ-L8REwQf3-nC0JmWQ/viewform?usp=sf_link"
                  target="_blank"
                  type="primary"
                >
                  Submit updates
                </Button>
              </div>
            </Box>
          </Container>

          <Heading title="PER TISSUE OBJECTS" />
          <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Aorta"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/aorta/"
                openInNewTab={true}
                image={"../../images/umap_Aorta.png"}
              /> 
              </Grid>
              <Grid item xs={6}>
              <InfoBox
                title="Bladder"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/bladder/"
                openInNewTab={true}
                image={"../../images/umap_Bladder.png"}
              />
            </Grid>
          </Grid>
          <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Blood"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/blood/"
                openInNewTab={true}
                image={"../../images/umap_Blood.png"}
              />
            </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Bone Marrow"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/bone_marrow/"
                openInNewTab={true}
                image={"../../images/umap_Bone_Marrow.png"}
              />
              </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Bone"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/bone/"
                openInNewTab={true}
                image={"../../images/umap_Bone.png"}
              />
               </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Brain"
                description="Brain cortex and Brainstem"
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/brain/"
                openInNewTab={true}
                image={"../../images/umap_Brain.png"}
              />
            </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Colon"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/colon/"
                openInNewTab={true}
                image={"../../images/umap_Colon.png"}
              /> 
              </Grid>
              <Grid item xs={6}>
              <InfoBox
                title="Diaphragm"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/diaphragm/"
                openInNewTab={true}
                image={"../../images/umap_Diaphragm.png"}
              />
             </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
                            <InfoBox
                title="Eye"
                description="Retina"
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/eye/"
                openInNewTab={true}
                image={"../../images/umap_Eye_retina.png"}
              />
               </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Fat"
                description="Mesenteric, Gonadal, Brown Adipose and Subcutaneous"
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/fat/"
                openInNewTab={true}
                image={"../../images/umap_Fat.png"}
              />
              </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Heart"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/heart/"
                openInNewTab={true}
                image={"../../images/umap_Heart.png"}
              />
               </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Hypothalamus and Pituitary"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/hypothalamus_pituitary/"
                openInNewTab={true}
                image={"../../images/umap_Hypothalamus_Pituitary.png"}
              />
              </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Kidney"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/kidney/"
                openInNewTab={true}
                image={"../../images/umap_Kidney.png"}
              />
         </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Limb muscle"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/limb_muscle/"
                openInNewTab={true}
                image={"../../images/umap_Limb_muscle.png"}
              />
               </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Liver"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/liver/"
                openInNewTab={true}
                image={"../../images/umap_Liver.png"}
              />
          </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Lung"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/lung/"
                openInNewTab={true}
                image={"../../images/umap_Lung.png"}
              />
          </Grid>
          </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Mammary gland"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/mammary/"
                openInNewTab={true}
                image={"../../images/umap_Mammary_gland.png"}
              />
          </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Pancreas"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/pancreas/"
                openInNewTab={true}
                image={"../../images/umap_Pancreas.png"}
              />
              </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Skin"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/skin/"
                openInNewTab={true}
                image={"../../images/umap_Skin.png"}
              />
          </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Small Intestine"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/small_intestine/"
                openInNewTab={true}
                image={"../../images/umap_Small_Intestine.png"}
              />
              </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Spleen"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/spleen/"
                openInNewTab={true}
                image={"../../images/umap_Spleen.png"}
              />
          </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Testes"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/testes/"
                openInNewTab={true}
                image={"../../images/umap_Testes.png"}
              />
                </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Thymus"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/thymus/"
                openInNewTab={true}
                image={"../../images/umap_Thymus.png"}
              />
            </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Tongue"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/tongue/"
                openInNewTab={true}
                image={"../../images/umap_Tongue.png"}
              />
                 </Grid>
              </Grid>
              <Grid className={cs.container}>
            <Grid item xs={6}>
              <InfoBox
                title="Trachea"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/trachea/"
                openInNewTab={true}
                image={"../../images/umap_Trachea.png"}
              />
            </Grid>
            <Grid item xs={6}>
              <InfoBox
                title="Uterus"
                description=""
                buttonTitle="Launch cellxgene"
                buttonLink="http://tabula-microcebus-cellxgene.ds.czbiohub.org/uterus/"
                openInNewTab={true}
                image={"../../images/umap_Uterus.png"}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CellxgeneInfoBoxEdit;
