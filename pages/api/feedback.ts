import fs from 'fs'; // Import the fs module. This is a built-in module in Node.js. It allows us to work with the file system.
import path from 'path'; // Import the path module. This is a built-in module in Node.js. It allows us to work with file and directory paths.
import { NextApiRequest, NextApiResponse } from 'next';

export const buildFeedbackPath = () =>
  path.join(process.cwd(), 'data', 'feedback.json'); // path.join() joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. process.cwd() returns the current working directory. __dirname returns the directory of the current module.

export const extractFeedback = (filePath: string) => {
  // Get the data from the feedback.json file.
  const fileData = fs.readFileSync(filePath).toString(); // fs.readFileSync() reads the entire contents of a file. toString() converts a Buffer to a string.
  console.log('extractFeedback ~ fileData:', fileData);
  const data = JSON.parse(fileData); // JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.
  return data;
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // If the request is a POST request
    const { email, feedback } = req.body; // Get the email and feedback from the request body.

    const newFeedback = {
      // Create a new feedback object
      id: new Date().toISOString(),
      email,
      feedback,
    };

    // Store that in a database or in a file
    const filePath = buildFeedbackPath(); // Get the path to the feedback.json file.
    const data = extractFeedback(filePath); // Get the data from the feedback.json file.
    data.push(newFeedback); // Add the new feedback to the data array.
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback }); // Send a response
  } else if (req.method === 'GET') {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
};

export default handler;
