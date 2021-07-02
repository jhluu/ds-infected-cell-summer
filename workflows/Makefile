FASTQ_DIR=/mnt/ibm_lg/jacklyn.luu/fastqs/
OUTPUT_DIR=/mnt/ibm_lg/jacklyn.luu/output

all: HAV DENV


HAV:
	nextflow run \
		olgabot/crispr-screen-nf \
		-r patch-2 \
		--treatment_fastq ${FASTQ_DIR}/$@/'HAV*fastq.gz' \
		--control_fastq ${FASTQ_DIR}/$@/'control*fastq.gz' \
		--library ${FASTQ_DIR}/$@/Human_GeCKOv2_Library_combine.csv \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}

DENV:
	nextflow run \
		olgabot/crispr-screen-nf \
		-r patch-2 \
		--treatment_fastq ${FASTQ_DIR}/$@/'*treatment*fastq.gz' \
		--control_fastq ${FASTQ_DIR}/$@/'control*fastq.gz' \
		--library ${FASTQ_DIR}/$@/Human_GeCKOv2_Library_combine.csv \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}


