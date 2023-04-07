import { useEffect, useState } from 'react';
import path from 'path';
import fs from 'fs/promises';
import { Product } from '@/utils/interfaces';

const useGetData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const filePath = path.join(process.cwd(), 'data', 'backend.json');
        const jsonData = await fs.readFile(filePath);
        const data = JSON.parse(jsonData.toString());
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { products, isLoading, error };
};

export default useGetData;
