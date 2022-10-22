import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db('invits2');

    const { one } = req.query;
    const guest = await db.collection('guest').find({ guestId: one }).toArray();

    console.log('i am here');
    res.json(guest);
    // res.status(200).json({ name: 'John Doe' });
    // const db = client.db('sample_mflix');

    // const movies = await db
    //   .collection('movies')
    //   .find({})
    //   .sort({ metacritic: -1 })
    //   .limit(10)
    //   .toArray();

    // res.json(movies);
  } catch (e) {
    console.error(e.message);
    res.status(500).json({});
    // res.status(e?.code || 500).json({ message: e?.message || 'Error' });
  }
};
