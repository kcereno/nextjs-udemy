import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.jrx3t.mongodb.net/?retryWrites=true&w=majority`;

console.log('connectionString:', connectionString);
const url =
  'mongodb+srv://kcereno:kcereno@cluster0.jrx3t.mongodb.net/?retryWrites=true&w=majority';

const dbName = 'blog';
const collectionName = 'feedback';

const connectToMongo = () => {
  return new MongoClient(url);
};

const postFeedback = async (client: MongoClient, data: any) => {
  const db = client.db('blog');
  const result = await db.collection('feedback').insertOne(data);

  return result;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input' });
      return;
    }

    // Store in DB
    const newMessage: {
      id?: ObjectId;
      email: string;
      name: string;
      message: string;
    } = {
      email,
      name,
      message,
    };

    const client = new MongoClient(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    try {
      const result = await collection.insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'Failed', result: err });
      return;
    }

    res.status(201).json({ message: 'Success', result: newMessage });
    client.close();
  }
};
export default handler;
