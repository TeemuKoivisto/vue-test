#!/bin/bash

aws s3 sync ./dist s3://teemun-vue-test \
  --acl bucket-owner-full-control \
  --region eu-central-1