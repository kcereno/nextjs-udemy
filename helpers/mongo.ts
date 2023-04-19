import { Comment } from '@/models/interfaces';
import { MongoClient } from 'mongodb';

const connectToDb = async () => {
  const url =
    'mongodb+srv://kcereno:kcereno@cluster0.jrx3t.mongodb.net/?retryWrites=true&w=majority';

  return await MongoClient.connect(url);
};

export const addEmailtoDB = async (email: string) => {
  const client = await connectToDb();
  const db = client.db('events');

  await db.collection('newsletter').insertOne({ email: email });
  console.log('Email added to DB');
  client.close();
};

export const addCommentToCollection = async (comment: Comment) => {
  const client = await connectToDb();
  const db = client.db('events');

  const result = await db
    .collection('comments')
    .insertOne({ comment: comment });
  console.log('addCommentToCollection ~ result:', result);

  client.close();
};
