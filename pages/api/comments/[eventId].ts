import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log('handler ~ newCommnent:', newComment);

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
