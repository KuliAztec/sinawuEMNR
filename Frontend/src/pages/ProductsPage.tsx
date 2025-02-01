import React from 'react';
import ProductList from '../components/ProductList';

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <a href="/create" className="text-blue-500">Add New Product</a>
      <a href="/edit" className="text-blue-500 ml-4">Edit Products</a>
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductsPage;