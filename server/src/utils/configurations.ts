import SES from "aws-sdk/clients/ses"
import config from "config"
import dotenv from'dotenv';
dotenv.config()

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.get<string>('AWS_SECRET_ACCESS_KEY'),
    region: config.get<string>('region'),
    apiVersion: config.get<string>('apiVersion')
}

export const AWSSES = new SES(awsConfig)