import {S3Event} from "aws-lambda";
import {GetObjectCommand, S3Client} from "@aws-sdk/client-s3";

const s3Client = new S3Client({})

export const handler = async (event: S3Event) => {
  console.log('event', JSON.stringify(event))

  await s3Client.send(new GetObjectCommand({
    Bucket: 'SAMPLE_BUCKET_NAME',
    Key: 'SAMPLE_KEY'
  }))

  return
}