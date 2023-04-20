import { addCommentToCollection, getAllComments } from '@/helpers/mongo';
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
    const fetchedComments = await getAllComments();
    console.log('handler ~ fetchedComments:', fetchedComments);

    res.status(200).json({ comments: fetchedComments });
  }
};

export default handler;
