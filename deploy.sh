#!/bin/bash

aws s3 sync --recursive ./build s3://teemun-vue-test \
  --acl bucket-owner-full-control \
  --region eu-central-1