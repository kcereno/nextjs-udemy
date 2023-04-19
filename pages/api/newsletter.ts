import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { addEmailtoDB } from '@/helpers/mongo';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    {
      const { email } = req.body;

      if (!email || !email.includes('@')) {
        res.status(422).json({ message: 'Invalid email address.' });
        return;
      }

      // Store it in a database
      addEmailtoDB(email);
      res.status(201).json({ message: 'Signed up!' });
    }
  }
};

export default handler;
