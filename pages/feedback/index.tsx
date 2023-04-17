import React from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';
import { Feedback } from '@/models/interfaces';

interface Props {
  feedbackItems: Feedback[];
}

const FeedbackPage = ({ feedbackItems }: Props) => {
  const [feedbackData, setFeedbackData] = React.useState<Feedback | null>(null);

  const handleShowAllDetails = async (id: string) => {
    const response = await fetch(`/api/${id}`);
    const data = await response.json();
    console.log('handleShowAllDetails ~ data:', data);
    setFeedbackData(data.feedback);

    console.log('handleShowAllDetails ~ data:', data);
  };

  return (
    <div>
      <h1>Feedback Page</h1>
      {feedbackData && <p>{feedbackData.feedback}</p>}
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.email}
            <button
              onClick={() => {
                handleShowAllDetails(item.id);
              }}
            >
              Show details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data: Feedback[] = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default FeedbackPage;
