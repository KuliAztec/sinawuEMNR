import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';

const EditListPage: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 p-4">{error}</div>;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Edit Products</h1>
      <div className="grid gap-4">
        {products.map(product => (
          <Link
            key={product._id}
            to={`/edit/${product._id}`}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">{product.name}</span>
                <span className="text-gray-500 ml-2">ID: {product._id}</span>
              </div>
              <span className="text-blue-500">Edit →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EditListPage;
