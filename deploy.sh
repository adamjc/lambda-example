#!/usr/bin/env bash

set -e # exit and return error code if one command fails
set -o pipefail # exit and return error code if pipe fails (even partially)
set -u # exit and return error code if uninitialised variables are accessed
set -x # echo every command

echo "DEPLOY"
echo "Cleaning up..."
rm -rf dist dist.zip
npm prune --omit=dev

echo "Setup..."
mkdir dist

echo "Packaging..."
cp -r node_modules dist/node_modules
cp -r src dist/src

echo "Deploying..."
aws cloudformation package \
  --template-file infrastructure.yaml \
  --s3-bucket adamjc-build-artifacts \
  --output-template-file infrastructure-production.yaml

aws cloudformation deploy \
  --template-file infrastructure-production.yaml \
  --stack-name lambda-example \
  --capabilities CAPABILITY_IAM # See: https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html
