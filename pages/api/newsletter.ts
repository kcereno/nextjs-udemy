import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { addEmailtoDB } from '@/helpers/mongo';

const connectDatabase = async () => {
  const url =
    'mongodb+srv://kcereno:kcereno@cluster0.jrx3t.mongodb.net/?retryWrites=true&w=majority';

  return await MongoClient.connect(url);
};

const insertDocument = async (client: MongoClient, document: any) => {
  const db = client.db();
  await db.collection('newsletter').insertOne(document);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    {
      const { email } = req.body;

      if (!email || !email.includes('@')) {
        res.status(422).json({ message: 'Invalid email address.' });
        return;
      }

      // Store it in a database
      let client;

      try {
        client = await connectDatabase();
      } catch (error) {
        res.status(500).json({ message: 'Failed to connect to DB' });
        return;
      }

      try {
        await insertDocument(client!, { email: email });
        client!.close();
      } catch (error) {
        res.status(500).json({ message: 'Failed to insert data to DB' });
        return;
      }

      res.status(201).json({ message: 'Signed up!' });
    }
  }
};

export default handler;
