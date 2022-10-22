import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;
    const { one } = req.query;
    const client = await clientPromise;
    const db = client.db('invits2');

    if (method === 'GET') {
      const guests = await db
        .collection('guest')
        .find({ guestId: one })
        .toArray();

      if (guests?.length === 0)
        return res
          .status(404)
          .json({ success: false, message: `${one} tidak ditemukan` });

      const guest = guests[0];
      const message = await db
        .collection('guestBook')
        .find({ guestId: guest?.guestId })
        .toArray();
      return res.status(200).json({
        success: true,
        data: {
          ...guest,
          message: message[0],
        },
      });
    } else if (method === 'POST') {
      const { message, confirm } = req.body;
      if (!message || confirm === undefined)
        return res.status(400).json({
          message: 'Isi pesan dan konfirmasi datang/tidak harus diisi',
        });

      const guests = await db
        .collection('guest')
        .find({ guestId: one })
        .toArray();

      if (guests?.length === 0)
        return res.status(404).json({ message: `${one} tidak ditemukan` });

      const guest = guests[0];
      const check = await db
        .collection('guestBook')
        .find({ guestId: guest?.guestId })
        .toArray();

      if (check?.length > 0) {
        const check0 = check[0];
        const updatedAt = Date.now();
        await db.collection('guestBook').updateOne(
          { _id: check0?._id },
          {
            $set: { content: message, updatedAt: updatedAt, confirm: confirm },
          }
        );
        return res.status(200).json({
          message: 'Update berhasil',
          data: {
            guestId: guest?.guestId,
            guestName: guest?.name,
            content: message,
            createdAt: check0?.createdAt,
            updatedAt: updatedAt,
          },
        });
      } else {
        const data = {
          guestId: guest?.guestId,
          guestName: guest?.name,
          content: message,
          confirm: confirm,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        await db.collection('guestBook').insertOne(data);
        return res.status(201).json({ message: 'Simpan berhasil', data });
      }
    } else {
      return res.status(404).end();
    }
  } catch (e) {
    console.error(e.message);
    return res.status(e?.code || 500).json({ message: e?.message || 'Error' });
    // res.status(e?.code || 500).json({ message: e?.message || 'Error' });
  }
};
