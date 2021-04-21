import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { eventId } = req.query;

  const client = await MongoClient.connect(
    process.env.NEXT_PUBLIC_ATLAS_DB || ``,
    {
      useUnifiedTopology: true,
    },
  );

  if (req.method == `GET`) {
    const db = client.db();

    const documents = await db
      .collection(`comments`)
      .find()
      .sort({ _id: -1 })
      .toArray();

    return res.status(200).json({ comments: documents });
  }

  if (req.method == `POST`) {
    const { email, name, text } = req.body;

    if (
      !email.includes(`@`) ||
      !name ||
      name.trim() == `` ||
      !text ||
      text.trim() == ``
    ) {
      return res.status(422).json({ message: `Invalid input!` });
    }

    const db = client.db();

    const newComment = { email, name, text, eventId, id: undefined };

    const createdComment = await db
      .collection(`comments`)
      .insertOne(newComment);

    newComment.id = createdComment.insertedId;

    await client.close();

    return res
      .status(201)
      .json({ message: `Added comment!`, comment: newComment });
  }

  return {};
}

export default handler;
