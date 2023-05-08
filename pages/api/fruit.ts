import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const filePath = path.join(process.cwd(), 'data', 'fruits.json');

  if (req.method === 'GET') {
    const fileData = fs.readFileSync(filePath).toString();
    const parsedData = JSON.parse(fileData);

    res
      .status(200)
      .json({ message: 'GET request recieved', fruits: parsedData });
  }
};

export default handler;
