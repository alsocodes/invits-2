import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db('invits2');
    const { id } = req.query;

    if (method === 'GET') {
      const templates = await db
        .collection('template')
        .find({ templateId: id })
        .sort({})
        .toArray();
      const template = templates?.[0] || null;
      res.status(200).json({ message: `success`, data: template });
    } else if (method === 'POST') {
      // const templates = await db
      //   .collection('template')
      //   .find({})
      //   .sort({})
      //   .toArray();
      // const template = templates?.[0] || null;
      // res.status(200).json({ message: `success`, data: template });
    } else {
      return res.status(404).end();
    }
  } catch (error) {}
};
