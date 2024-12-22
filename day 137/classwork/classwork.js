import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: '', date: '', price: '' });

const addProduct = (e) => {
    e.preventDefault();
    const { name, date, price } = formData;

    // Basic validation for price input
    if (isNaN(price) || price <= 0) {
      alert('Please enter a valid price');
      return;
    }

    setProducts([...products, { id: Date.now(), name, date, price: parseFloat(price).toFixed(2) }]);
    setFormData({ name: '', date: '', price: '' });
};

const formatDate = (date) => new Date(date).toLocaleDateString();

return (
    <div className="app-container">
      <h1>Online Store</h1>
      <form onSubmit={addProduct}>
        {['name', 'date', 'price'].map((field) => (
          <div key={field} className="input-container">
            <input
              type={field === 'date' ? 'date' : field === 'price' ? 'number' : 'text'}
              placeholder={field === 'price' ? 'Price ($)' : `Product ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={formData[field]}
              onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
              required
            />
          </div>
        ))}
        <button type="submit">Add Product</button>
      </form>

      <div className="product-list">
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>Release Date: {formatDate(product.date)}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
