
# This makefile adds the non targetting control guide RNA list as an argument
# This version is to test for normalization = total makes a difference

FASTQ_DIR=/mnt/ibm_lg/jacklyn.luu/fastqs_combined
OUTPUT_DIR=/mnt/ibm_lg/jacklyn.luu/output_072321
DIRS := DENV EV RV Wang_229E Wang_OC43 Wang_SARS-CoV2

target: $(DIRS)

$(DIRS):
	nextflow run \
		olgabot/crispr-screen-nf \
		-r main \
		--treatment_fastq ${FASTQ_DIR}/$@/'*treatment.fastq.gz' \
		--control_fastq ${FASTQ_DIR}/$@/'*control.fastq.gz' \
		--library ${FASTQ_DIR}/Human_GeCKOv2_Library_combine.csv \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}/$@ \
		--ntc_list ${FASTQ_DIR}/ntc_list_gecko.txt \
		--skip_flute 



