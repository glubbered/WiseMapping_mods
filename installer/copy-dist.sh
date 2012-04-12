#!/bin/bash

set -e	
set -u

WISE_VERSION=$1
SERVER_DOWNLOAD_DIR=/var

WISE_BIN_FILE_NAME=wisemapping-${WISE_VERSION}.zip
WISE_BIN_FILE_PATH=./installer/target/${WISE_BIN_FILE_NAME}

WISE_SRC_FILE_NAME=wisemapping-${WISE_VERSION}-src.tar.gz 
WISE_SRC_FILE_PATH=./installer/target/${WISE_SRC_FILE_NAME}

scp ${WISE_SRC_FILE_PATH} thecrow@wisemapping.com:${SERVER_DOWNLOAD_DIR}/
scp ${WISE_BIN_FILE_PATH} thecrow@wisemapping.com:${SERVER_DOWNLOAD_DIR}

# It's there ?
wget  -S http://downloads.wisemapping.org/stable/${WISE_BIN_FILE_NAME}
wget  -S http://downloads.wisemapping.org/stable/${WISE_SRC_FILE_NAME}