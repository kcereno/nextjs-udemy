import { useRef, useState } from 'react';

export default function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState<any[]>([]);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const feedbackInputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredFeedback = feedbackInputRef.current?.value;

    const reqBody = {
      email: enteredEmail,
      feedback: enteredFeedback,
    };

    fetch('/api/feedback', {
      // This is the path to the API route
      method: 'POST', // The method is POST because we are sending data
      body: JSON.stringify(reqBody), // The data we are sending to the server is in the body of the request. We need to convert it to JSON first.
      headers: {
        // The headers tell the server what kind of data we are sending and what kind of data we expect back. In this case, we are sending JSON data and we expect JSON data back.
        'Content-Type': 'application/json', // This tells the server that we are sending JSON data in the body of the request.
      },
    })
      .then((res) => res.json()) // The server will respond with JSON data. We need to convert it to a JavaScript object. We can do that with the .json() method. This method returns a promise, so we need to call .then() again.
      .then((data) => console.log(data)); // Log the data to the console to see what it looks like (optional)
  };

  const handleLoadFeedback = () => {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then((data) => setFeedbackItems(data.feedback));
  };

  return (
    <>
      <h1>HomePage</h1>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailInputRef}
          />
        </div>
        <div className="">
          <label htmlFor="feedback">Your Feedback</label>
          <textarea
            name="name"
            id="name"
            rows={5}
            ref={feedbackInputRef}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <button onClick={handleLoadFeedback}>Load Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.feedback}>
            {item.feedback} by {item.email}
          </li>
        ))}
      </ul>
    </>
  );
}
