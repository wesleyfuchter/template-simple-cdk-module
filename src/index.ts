#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SimpleStack } from "./iac/simple-stack";
import { validate, nameIt } from "./fns/useEnv";

validate();

const app = new cdk.App();
new SimpleStack(
  app,
  nameIt("template-simple-cdk-module-stack"),
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
  },
);
