import { IContactDetails } from '../models/interfaces';

export const sendContactData = async (contactDetails: IContactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('handleSubmit ~ response:', response);

  const data = await response.json();
  console.log('handleSubmit ~ data:', data);

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};
