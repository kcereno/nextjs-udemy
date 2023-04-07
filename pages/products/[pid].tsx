import React from 'react';
import { GetStaticPropsContext } from 'next';
import path from 'path';
import fs from 'fs/promises';
import { Product } from '@/utils/interfaces';
import { getData } from '@/utils/functions';

interface Props {
  loadedProduct: Product;
}

const ProductDetailPage = ({ loadedProduct }: Props) => {
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const productId = params!.pid;

  const data = await getData();

  const product = data.products.find(
    (product: Product) => product.id === productId
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { loadedProduct: product },
  };
}

export async function getStaticPaths() {
  const { products } = await getData();

  const paths = products.map((product: Product) => ({
    params: { pid: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default ProductDetailPage;
