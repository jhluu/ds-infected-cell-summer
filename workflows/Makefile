FASTQ_DIR_J=/mnt/ibm_lg/jacklyn.luu/fastqs
FASTQ_DIR_E=/mnt/ibm_lg/elianna/fastqs
OUTPUT_DIR=/mnt/ibm_lg/jacklyn.luu/output

all: HAV_library_A HAV_library_B 

HAV_library_A:
	nextflow run \
		olgabot/crispr-screen-nf \
		-r patch-2 \
		--treatment_fastq ${FASTQ_DIR_J}/$@/'HAV*fastq.gz' \
		--control_fastq ${FASTQ_DIR_J}/$@/'control*fastq.gz' \
		--library ${FASTQ_DIR_J}/$@/Human_GeCKOv2_Library_A_3_mageck.csv \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}
HAV_library_B:
	nextflow run \
		olgabot/crispr-screen-nf \
		-r patch-2 \
		--treatment_fastq ${FASTQ_DIR_J}/$@/'HAV*fastq.gz' \
		--control_fastq ${FASTQ_DIR_J}/$@/'control*fastq.gz' \
		--library ${FASTQ_DIR_J}/$@/Human_GeCKOv2_Library_B_1_mageck.csv \
		--output_prefix $@ \
		--output ${OUTPUT_DIR}

