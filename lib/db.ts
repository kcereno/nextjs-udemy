import { MongoClient } from 'mongodb';

const url =
  'mongodb+srv://kcereno:kcereno@cluster0.jrx3t.mongodb.net/?retryWrites=true&w=majority';

export const connectToDatabase = () => {
  const client = new MongoClient(url);

  return client;
};
