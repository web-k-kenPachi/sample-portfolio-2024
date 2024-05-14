import { ListObjectsV2Command, S3Client } from '@aws-sdk/client-s3';
// 新しいクライアントを作成します。R2にはS3互換性のためのリージョンが必要ですが、サポートされているのは「auto」のみであることに注意が必要です
const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.NEXT_PUBLIC_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID, //  fill in your own
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY, // fill in your own
  },
});

import { NextResponse } from 'next/server';

const dataList = await s3.send(
  new ListObjectsV2Command({
    Bucket: 'data-kenpachi-design',
  }),
);

const dataListValues = Object.values(dataList.Contents);

const dataKeys = dataListValues.map(
  (data) => `https://pub-15d83f8df57642d0bfa2f9aa639e6e8e.r2.dev/${data.Key}`,
);
export async function GET() {
  return NextResponse.json(Object.values(dataKeys));
}
