import type { NextApiRequest, NextApiResponse } from 'next';
import { slugify } from '../../../../lib/helper';
import clientPromise from '../../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const client = await clientPromise;
    const db = client.db('invits2');
    const { one } = req.query;

    const guests = await db
      .collection('guest')
      .find({ guestId: one })
      .toArray();
    console.log(guests);
    if (guests?.length === 0)
      return res.status(404).json({ message: `Guest tidak ditemukan ${one}` });

    const guest = guests[0];
    if (method === 'GET') {
      return res.status(200).json({ guest });
    } else if (method === 'PUT') {
      const { name, address, phone } = req.body;
      if (!name || !address || !phone)
        return res
          .status(400)
          .json({ message: 'Nama, alamat, dan no hp harus diisi' });

      const sphone =
        phone?.substr(0, 2) === '08' ? `62${phone?.slice(1)}` : phone;

      await db
        .collection('guest')
        .updateOne(
          { guestId: guest?.guestId },
          { $set: { name: name, address: address, phone: sphone } }
        );

      res.status(200).json({
        message: 'Update sukses',
        data: {
          name: name,
          address: address,
          phone: sphone,
        },
      });
    } else if (method === 'DELETE') {
      db.collection('guest').deleteOne({ guestId: guest?.guestId });
      res.status(200).json({ message: 'Hapus sukses' });
    } else {
      return res.status(404).end();
    }
  } catch (error) {}
};
