import React from 'react';

interface ProductsProps {
  title: string;
  description: string;
  price: number;
  images: string[];
  active?: boolean;
}

export const Product: React.FunctionComponent<ProductsProps> = ({
  title,
  description,
  price,
  images,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src="{images}" alt="" />
    </>
  );
};
