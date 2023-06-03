import SES from "aws-sdk/clients/ses";
import config from "config";

const awsConfig = {
  accessKeyId: config.get<string>("AWS_ACCESS_KEY_ID"),
  secretAccessKey: config.get<string>("AWS_SECRET_ACCESS_KEY"),
  region: config.get<string>("region"),
  apiVersion: config.get<string>("apiVersion"),
};

export const AWSSES = new SES(awsConfig);
