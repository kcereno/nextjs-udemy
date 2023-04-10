import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

interface Props {
  initialSales: any;
}

const LastSalesPage = ({ initialSales }: Props) => {
  const [sales, setSales] = useState<any[]>(initialSales);

  const fireBaseURL =
    'https://next-js-1ff3c-default-rtdb.firebaseio.com/sales.json'; // Firebase requires .json at the end of the URL

  const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    const transformedData = [];

    for (const key in data) {
      transformedData.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }

    setSales(transformedData);
  };

  const { error } = useSWR(fireBaseURL, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!sales) return <div>Loading...</div>;

  return (
    <ul>
      {sales.map((sale: any) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    'https://next-js-1ff3c-default-rtdb.firebaseio.com/sales.json'
  );

  const data = await response.json();

  const transformedData = [];

  for (const key in data) {
    transformedData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: { sales: transformedData },
    revalidate: 10,
  };
}

export default LastSalesPage;
