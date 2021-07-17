
FASTQ_DIR=/mnt/ibm_lg/jacklyn.luu/fastqs_combined
OUTPUT_DIR=/mnt/ibm_lg/jacklyn.luu/output_combined
DIRS := DENV EV HAV HCV RV Wang_229E Wang_OC43 Wang_SARS-CoV

target: $(DIRS)

$(DIRS):
	nextflow run \
		olgabot/crispr-screen-nf \
		-r patch-2 \
		--treatment_fastq ${FASTQ_DIR}/$@/'*treatment.fastq.gz' \
		--control_fastq ${FASTQ_DIR}/$@/'*control.fastq.gz' \
		--library ${FASTQ_DIR}/Human_GeCKOv2_Library_combine.csv \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}/$@



