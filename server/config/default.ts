import dotenv from "dotenv";
dotenv.config()

export default {
    port: process.env.PORT,
    dbURI:process.env.DBURI,
    SWF: 10,
    aTPrK: process.env.ATPRK,
    aTPK:process.env.ATPK,
    rTPrK: process.env.RTPRK,
    rTPK: process.env.RTPK,
    CLIENT_URL: process.env.CLIENT_URL,
    awsEmailSign: process.env.AWSEMAILSIGN,
    awsEmailVerify: process.env.AWSEMAILVERIFY,
    EMAIL_FROM: process.env.EMAIL_FROM,
    REPLY_TO: process.env.REPLY_TO,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION,
    apiVersion: process.env.APIVERSION,
}
