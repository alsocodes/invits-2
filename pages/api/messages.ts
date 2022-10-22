import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db('invits2');
    // console.log(req.query);
    // const { search } = req.query;

    if (method === 'GET') {
      const messages = await db
        .collection('guestBook')
        .find({})
        .sort({})
        .toArray();
      res.status(200).json({ message: `success`, data: messages });
    } else {
      return res.status(404).end();
    }
  } catch (error) {}
};
