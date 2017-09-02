#!/bin/bash

ls
aws s3 sync ./build s3://teemun-vue-test \
  --acl bucket-owner-full-control \
  --region eu-central-1