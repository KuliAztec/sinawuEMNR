import React from 'react';
import { useProducts } from '../hooks/useProducts';

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-green-600 font-bold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;