
FASTQ_DIR=/mnt/ibm_lg/jacklyn.luu/fastqs
OUTPUT_DIR=/mnt/ibm_lg/jacklyn.luu/output
DIRS := DENV_library_A  HAV_library_A  RV_library_A Wang_OC43_library_A DENV_library_B HAV_library_B RV_library_B Wang_OC43_library_B EV_library_A HCV_library_A Wang_229E_library_A Wang_SARS-CoV2_library_A EV_library_B HCV_library_B Wang_229E_library_B Wang_SARS-CoV2_library_B

target: $(DIRS)

$(DIRS):
	nextflow run \
		olgabot/crispr-screen-nf \
		-r patch-2 \
		--treatment_fastq ${FASTQ_DIR}/$@/'*treatment.fastq.gz' \
		--control_fastq ${FASTQ_DIR}/$@/'*control.fastq.gz' \
		--library ${FASTQ_DIR}/$@/'*mageck.csv' \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}/$@



