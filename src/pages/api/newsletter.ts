import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == `POST`) {
    const { email } = req.body;

    if (!email || !email.includes(`@`)) {
      return res.status(422).json({ message: `Invalid email address!` });
    }

    const client = await MongoClient.connect(
      process.env.NEXT_PUBLIC_ATLAS_DB || ``,
      {
        useUnifiedTopology: true,
      },
    );
    const db = client.db();

    await db.collection(`newsletter`).insertOne({ email });

    await client.close();

    return res.status(201).json({ message: `Signed up!` });
  }

  return {};
}

export default handler;
