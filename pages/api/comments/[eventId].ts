import { addCommentToCollection } from '@/helpers/mongo';
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, text, eventId } = req.body;

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    addCommentToCollection(newComment);

    res.status(201).json({ message: 'New comment added', comment: newComment });
  }

  if (req.method === 'GET') {
    const dummyList = [
      {
        id: 'c1',
        name: 'Max',
        text: 'A first comment!',
      },
      {
        id: 'c2',
        name: 'Manuel',
        text: 'A second comment!',
      },
    ];
    res.status(200).json({ comments: dummyList });
  }
};

export default handler;
