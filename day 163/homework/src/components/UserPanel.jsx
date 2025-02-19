import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useAuth } from "../hooks/useAuth";

function UserPanel() {
  const { products, addProduct, deleteProduct } = useProducts();
  const { logout } = useAuth();
  const [product, setProduct] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (product.trim()) {
      addProduct({ name: product });
      setProduct("");
    }
  };

  return (
    <div className="panel">
      <h1>main web</h1>
      <button onClick={logout}>Logout</button>

      <form onSubmit={handleAddProduct}>
        <input type="text" placeholder="Product Name" value={product} onChange={(e) => setProduct(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => deleteProduct(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPanel;
