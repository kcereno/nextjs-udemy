import React, { useEffect, useState } from 'react';

const LastSalesPage = () => {
  const [data, setData] = useState<any[]>();

  const [isLoading, setIsLoading] = useState(false);

  const fireBaseURL =
    'https://next-js-1ff3c-default-rtdb.firebaseio.com/sales.json'; // Firebase requires .json at the end of the URL

  useEffect(() => {
    setIsLoading(true);
    fetch(fireBaseURL)
      .then((response) => response.json())
      .then((data) => {
        // Data is returned as an object
        const transformedData = [];

        for (const key in data) {
          transformedData.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setData(transformedData);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data found.</p>;
  }

  return (
    <ul>
      {data.map((sale: any) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
