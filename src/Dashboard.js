import React, { useState } from 'react';
import ProductList from './ProductList';

const mockProducts = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
    { id: 4, name: 'Product D' },
    { id: 5, name: 'Product E' },
  ];

const Dashboard = () => {
  // Initialize products state with mockProducts
  const [products] = useState(mockProducts);
  // Initialize searchTerm state
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle filtering based on searchTerm
  const handleFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleFilter}
      />
      <ProductList products={products} searchTerm={searchTerm} />
    </div>
  );
};

export default Dashboard;