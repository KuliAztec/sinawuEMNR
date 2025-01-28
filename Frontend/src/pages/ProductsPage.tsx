import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;