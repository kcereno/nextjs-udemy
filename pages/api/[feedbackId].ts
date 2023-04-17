import { NextApiRequest, NextApiResponse } from 'next';
import { buildFeedbackPath, extractFeedback } from './feedback';
import { Feedback } from '@/models/interfaces';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const feedbackId = req.query.feedbackId;

  const filePath = buildFeedbackPath();
  const data: Feedback[] = extractFeedback(filePath);

  const selectedFeedback = data.find((feedback) => feedback.id === feedbackId);

  res.status(200).json({ feedback: selectedFeedback });
};
export default handler;
