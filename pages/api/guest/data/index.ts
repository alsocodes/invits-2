import type { NextApiRequest, NextApiResponse } from 'next';
import { slugify } from '../../../../lib/helper';
import clientPromise from '../../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db('invits2');
    const { search } = req.query;

    if (method === 'GET') {
      const guest = await db
        .collection('guest')
        .find({})
        .sort({ name: 'asc' })
        .toArray();
      res.status(200).json({ message: 'success', data: guest });
    } else if (method === 'POST') {
      const { name, address, phone } = req.body;
      if (!name || !address || !phone)
        return res
          .status(400)
          .json({ message: 'Nama, alamat, dan no hp harus diisi' });

      let guestId = '';
      let i = 1;
      let tmp = slugify(name);
      while (guestId === '') {
        const check = await db
          .collection('guest')
          .find({ guestId: tmp })
          .toArray();
        if (check?.length === 0) {
          guestId = tmp;
        }
        tmp = `${slugify(name)}-${i}`;
        i++;
      }

      const sphone =
        phone?.substr(0, 2) === '08' ? `62${phone?.slice(1)}` : phone;
      const data = {
        guestId,
        name,
        address,
        phone: sphone,
      };
      db.collection('guest').insertOne(data);
      return res.status(201).json({
        message: 'Create success',
        data,
      });
    } else {
      return res.status(404).end();
    }
  } catch (error) {}
};
