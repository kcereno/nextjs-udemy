import { hashPassword } from '@/lib/auth';
import { connectToDatabase } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;

  const { email, password } = data;

  if (!email || !password) {
    res.status(422).json({ message: 'Invalid submission' });
    return;
  }

  try {
    const client = connectToDatabase();

    const db = client.db('auth');

    const hashedPassword = hashPassword(password);

    const result = await db
      .collection('users')
      .insertOne({ email, password: hashedPassword });
    console.log('handler ~ result:', result);

    res.status(201).json({ message: 'User added ' });

    client.close();
  } catch (error) {
    console.log(error);
  }
};

export default handler;
