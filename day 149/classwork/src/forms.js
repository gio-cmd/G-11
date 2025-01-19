import React, { useState } from 'react';

const MultiInputForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Multi-Input Form</h1>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        <div>
          <label>First Name: </label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        </div>
      </form>
      <h2>Live Output</h2>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
    </div>
  );
};

export default MultiInputForm;
