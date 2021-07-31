# ds-infected-cell-summer

This repo contains code contributions from Elianna Kondylis and Jacklyn Luu during the summer of 2021.

### Goal of Project
* Establish pipeline to process raw sequencing data from CRISPR screen experiments
* Create data visualizations to compare CRISPR screen data across different papers and families of viruses 
* Incorporate datavizs into Infected Cell portal 


### File Descriptions
* Compiled_Data_Frames.ipynb: Compiles all the CRISPR screens and adds a metadata column (last name of author, virus). I have added the "screens" folder to the shared Google Drive.

* Compiled_df_CRISPR screens.ipynb: Finds all the CRISPR screen results csv files and add author + virus names

* Workflows: directory with makefile that takes fastq data (treatment and control) and Fred Hutch's Nextflow pipeline to create count tables and run RRA and RRAflute
