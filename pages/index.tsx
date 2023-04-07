import { Product } from '@/utils/interfaces';
import fs from 'fs/promises'; // fs/promises is a new feature in Node 14.0.0. It allows us to use async/await with the fs module.
import Link from 'next/link';
import path from 'path'; // path is a built-in Node module that allows us to work with file paths.

interface Props {
  products: Product[];
}

export default function HomePage({ products }: Props) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// Executes this code first
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  // If there is no data, redirect to /no-data
  if (!data) {
    return {
      redirect: {
        destination: '/no-data', // Redirect to /no-data
      },
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
}
