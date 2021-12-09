# Adjusted mageck test and mageck count with total norm arguments
# To include: Wang_229E Wang_OC43 Wang_SARS-CoV2

# To run, type "make" in command line

FASTQ_DIR=/mnt/ibm_lg/jacklyn.luu/fastqs_combined
OUTPUT_DIR=/mnt/ibm_lg/jacklyn.luu/nextflow_output/output_120821
DIRS := HAV 

target: $(DIRS)

$(DIRS):
	nextflow run \
		jhluu/crispr-screen-nf \
		-r main \
		--treatment_fastq ${FASTQ_DIR}/$@/'*treatment.fastq.gz' \
		--control_fastq ${FASTQ_DIR}/$@/'*control.fastq.gz' \
		--library ${FASTQ_DIR}/Human_GeCKOv2_Library_combine.csv \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}/$@ \
		--skip_flute 